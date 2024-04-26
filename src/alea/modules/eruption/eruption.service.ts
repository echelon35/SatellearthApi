import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Eruption } from './eruption.model';

@Injectable()
export class EruptionService {
  constructor(
    @InjectModel(Eruption)
    private eruptionModel: typeof Eruption,
  ) {}

  async findAndCountAll(): Promise<{ rows: Eruption[]; count: number }> {
    return this.eruptionModel.findAndCountAll({ raw: false });
  }

  async findOneByDisaster(disasterId: number): Promise<Eruption> {
    return this.eruptionModel.findOne({ where: { disasterId: disasterId } });
  }
}
