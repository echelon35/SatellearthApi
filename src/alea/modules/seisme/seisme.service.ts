import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Seisme } from './seisme.model';
import { ISeismeFilter } from './Interfaces/ISeismeFilter';
import { Op, col, fn, where } from 'sequelize';
import { Disaster } from '../disaster/disaster.model';

@Injectable()
export class SeismeService {
  constructor(
    @InjectModel(Seisme)
    private seismeModel: typeof Seisme,
  ) {}

  async findAndCountAll(
    query: ISeismeFilter,
  ): Promise<{ rows: Seisme[]; count: number }> {
    const page = query.page || 1;
    const limit = query.limit || 10;
    const sense_order = query.sense_order || 'DESC';
    const field_order = query.field_order || 'dernier_releve';
    const condition_from_1 = query.from
      ? { premier_releve: { [Op.gte]: new Date(`${query.from}`) } }
      : null;
    const condition_from_2 = query.from
      ? { dernier_releve: { [Op.gte]: new Date(`${query.from}`) } }
      : null;
    const condition_to_1 = query.to
      ? {
          premier_releve: {
            [Op.lte]: new Date().setDate(new Date(`${query.to}`).getDate() + 1),
          },
        }
      : null;
    const condition_to_2 = query.to
      ? {
          dernier_releve: {
            [Op.lte]: new Date().setDate(new Date(`${query.to}`).getDate() + 1),
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

    const condition_fromto =
      query.from || query.to
        ? {
            [Op.or]: [
              { [Op.and]: [condition_from_1, condition_to_1] },
              { [Op.and]: [condition_from_2, condition_to_2] },
            ],
          }
        : null;

    return this.seismeModel.findAndCountAll({
      raw: false,
      where: {
        [Op.and]: [condition_intersects],
      },
      include: [
        {
          model: Disaster,
          required: true,
          where: condition_fromto,
          as: 'disaster',
        },
      ],
      limit: limit,
      offset: condition_offset,
      // order: [[Disaster, field_order, sense_order]],
    });
  }

  async findOneByDisaster(disasterId: number, scope?: string): Promise<Seisme> {
    if (scope) {
      return this.seismeModel
        .scope(scope)
        .findOne({ where: { disasterId: disasterId } });
    } else {
      return this.seismeModel.findOne({ where: { disasterId: disasterId } });
    }
  }
}
