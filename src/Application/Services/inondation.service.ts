import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Inondation } from '../../Domain/Models/inondation.model';
import { Op, col, fn, where } from 'sequelize';
import * as moment from 'moment';
import { Disaster } from 'src/Domain/Models/disaster.model';
import { IInondationFilter } from 'src/Domain/Interfaces/IInondationFilter';

@Injectable()
export class InondationService {
  constructor(
    @InjectModel(Inondation)
    private inondationModel: typeof Inondation,
  ) {}

  async findAndCountAll(
    query: IInondationFilter,
  ): Promise<{ rows: Inondation[]; count: number }> {
    const page = query.page || 1;
    const limit = query.limit || 10;
    const premier_releve = moment(`${query.from}`).utc().format('MM-DD-YYYY');
    const dernier_releve = moment(`${query.to}`).utc().format('MM-DD-YYYY');
    // const sense_order = query.sense_order || 'DESC';
    // const field_order = query.field_order || 'dernier_releve';
    const condition_from = query.from
      ? {
          dernier_releve: {
            [Op.gte]: premier_releve,
          },
        }
      : null;
    const condition_to = query.to
      ? {
          dernier_releve: {
            [Op.lte]: dernier_releve,
          },
        }
      : null;

    const condition_offset = page * limit - limit;

    const q_bbox =
      query.sw_lon && query.sw_lat && query.ne_lon && query.ne_lat
        ? fn(
            'ST_MakeEnvelope',
            query.sw_lon,
            query.sw_lat,
            query.ne_lon,
            query.ne_lat,
            '4326',
          )
        : null;

    const pointDisaster = fn('ST_SetSRID', col('point'), '4326');
    const intersects =
      q_bbox != null ? fn('ST_Intersects', q_bbox, pointDisaster) : null;
    const condition_intersects =
      q_bbox != null ? where(intersects, true) : null;

    return this.inondationModel.findAndCountAll({
      raw: false,
      where: {
        [Op.and]: [condition_intersects],
      },
      include: [
        {
          model: Disaster,
          required: true,
          where: { [Op.and]: [condition_from, condition_to] },
          as: 'disaster',
        },
      ],
      limit: limit,
      offset: condition_offset,
      // order: [[Disaster, field_order, sense_order]],
    });
  }

  async findOneByDisaster(
    disasterId: number,
    scope?: string,
  ): Promise<Inondation> {
    if (scope) {
      return this.inondationModel
        .scope(scope)
        .findOne({ where: { disasterId: disasterId } });
    } else {
      return this.inondationModel.findOne({
        where: { disasterId: disasterId },
      });
    }
  }
}
