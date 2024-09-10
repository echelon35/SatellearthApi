import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { col, fn, where, Op } from 'sequelize';
import { IDisasterFilter } from '../../Domain/Interfaces/IDisasterFilter';
import { IFeedObject } from '../../Domain/Interfaces/IFeed';
import { Alea } from '../../Domain/Models/alea.model';
import { Disaster } from '../../Domain/Models/disaster.model';
import { BolideService } from './bolide.service';
import { CycloneService } from './cyclone.service';
import { EruptionService } from './eruption.service';
import { InondationService } from './inondation.service';
import { SeismeService } from './seisme.service';
import { IPaginationOptions } from '../../Common/Interfaces/IPaginationOptions';

@Injectable()
export class DisasterService {
  constructor(
    @InjectModel(Disaster)
    private disasterModel: typeof Disaster,
    private seismeService: SeismeService,
    private bolideService: BolideService,
    private inondationService: InondationService,
    private eruptionService: EruptionService,
    private cycloneService: CycloneService,
  ) {}

  async findAndCountAll(
    params: IDisasterFilter,
  ): Promise<{ rows: Disaster[]; count: number }> {
    const page = params.page || 1;
    const limit = params.limit || 10;
    const sense_order = params.sense_order || 'DESC';
    const field_order = params.field_order || 'dernier_releve';
    const condition_from_1 = params.from
      ? { premier_releve: { [Op.gte]: new Date(`${params.from}`) } }
      : null;
    const condition_from_2 = params.from
      ? { dernier_releve: { [Op.gte]: new Date(`${params.from}`) } }
      : null;
    const condition_to_1 = params.to
      ? {
          premier_releve: {
            [Op.lte]: new Date().setDate(
              new Date(`${params.to}`).getDate() + 1,
            ),
          },
        }
      : null;
    const condition_to_2 = params.to
      ? {
          dernier_releve: {
            [Op.lte]: new Date().setDate(
              new Date(`${params.to}`).getDate() + 1,
            ),
          },
        }
      : null;

    const condition_offset = page * limit - limit;

    const q_bbox =
      params.sw_lon && params.sw_lat && params.ne_lon && params.ne_lat
        ? fn(
            'ST_MakeEnvelope',
            params.sw_lon,
            params.sw_lat,
            params.ne_lon,
            params.ne_lat,
            '4326',
          )
        : null;

    const pointDisaster = fn('ST_SetSRID', col('point'), '4326');
    const intersects =
      q_bbox != null ? fn('ST_Intersects', q_bbox, pointDisaster) : null;
    const condition_intersects =
      q_bbox != null ? where(intersects, true) : null;

    //Recherche de l'id du type d'aléa
    let alea: Alea;
    if (params.type != null) {
      alea = await Alea.findOne({ where: { name: `${params.type}` } });
    }
    const condition_type = alea ? { aleaId: `${alea.id}` } : null;

    const condition_fromto =
      params.from || params.to
        ? {
            [Op.or]: [
              { [Op.and]: [condition_from_1, condition_to_1] },
              { [Op.and]: [condition_from_2, condition_to_2] },
            ],
          }
        : null;

    //TODO : Make a repository instead
    return this.disasterModel.scope('minimal').findAndCountAll({
      where: {
        [Op.and]: [
          condition_fromto,
          condition_type,
          // condition_visible
          condition_intersects,
        ],
      },
      limit: limit,
      offset: condition_offset,
      order: [[field_order, sense_order]],
    });
  }

  async count(params: IDisasterFilter): Promise<number> {
    const condition_from_1 = params.from
      ? { premier_releve: { [Op.gte]: new Date(`${params.from}`) } }
      : null;
    const condition_from_2 = params.from
      ? { dernier_releve: { [Op.gte]: new Date(`${params.from}`) } }
      : null;
    const condition_to_1 = params.to
      ? {
          premier_releve: {
            [Op.lte]: new Date().setDate(
              new Date(`${params.to}`).getDate() + 1,
            ),
          },
        }
      : null;
    const condition_to_2 = params.to
      ? {
          dernier_releve: {
            [Op.lte]: new Date().setDate(
              new Date(`${params.to}`).getDate() + 1,
            ),
          },
        }
      : null;

    const q_bbox =
      params.sw_lon && params.sw_lat && params.ne_lon && params.ne_lat
        ? fn(
            'ST_MakeEnvelope',
            params.sw_lon,
            params.sw_lat,
            params.ne_lon,
            params.ne_lat,
            '4326',
          )
        : null;

    const pointDisaster = fn('ST_SetSRID', col('point'), '4326');
    const intersects =
      q_bbox != null ? fn('ST_Intersects', q_bbox, pointDisaster) : null;
    const condition_intersects =
      q_bbox != null ? where(intersects, true) : null;

    //Recherche de l'id du type d'aléa
    let alea: Alea;
    if (params.type != null) {
      alea = await Alea.findOne({ where: { name: `${params.type}` } });
    }
    const condition_type = alea ? { aleaId: `${alea.id}` } : null;

    const condition_fromto =
      params.from || params.to
        ? {
            [Op.or]: [
              { [Op.and]: [condition_from_1, condition_to_1] },
              { [Op.and]: [condition_from_2, condition_to_2] },
            ],
          }
        : null;

    //TODO : Make a repository instead
    return this.disasterModel.count({
      where: {
        [Op.and]: [
          condition_fromto,
          condition_type,
          // condition_visible
          condition_intersects,
        ],
      },
    });
  }

  async findForFeed(params: IPaginationOptions): Promise<Disaster[]> {
    const page = params.page || 1;
    const limit = params.limit || 10;
    const sense_order = params.sense_order || 'DESC';
    const field_order = params.field_order || 'dernier_releve';

    const condition_offset = page * limit - limit;

    return this.disasterModel.scope('minimal').findAll({
      limit: limit,
      offset: condition_offset,
      order: [[field_order, sense_order]],
    });
  }

  async fromDisasterToAlea(
    disasters: Disaster[],
    scope?: string,
  ): Promise<IFeedObject[]> {
    const allDisasters = [];

    for (const disaster of disasters) {
      switch (disaster.alea.name) {
        case 'seisme':
          const seisme = await this.seismeService.findOneByDisaster(
            disaster.id,
            scope,
          );
          allDisasters.push({ type: 'alea', content: seisme });
          break;
        case 'bolide':
          const bolide = await this.bolideService.findOneByDisaster(
            disaster.id,
          );
          allDisasters.push({ type: 'alea', content: bolide });
          break;
        case 'inondation':
          const inondation = await this.inondationService.findOneByDisaster(
            disaster.id,
          );
          allDisasters.push({ type: 'alea', content: inondation });
          break;
        case 'eruption':
          const eruption = await this.eruptionService.findOneByDisaster(
            disaster.id,
          );
          allDisasters.push({ type: 'alea', content: eruption });
          break;
        case 'cyclone':
          const cyclone = await this.cycloneService.findOneByDisaster(
            disaster.id,
          );
          allDisasters.push({ type: 'alea', content: cyclone });
          break;
      }
    }

    return allDisasters;
  }
}
