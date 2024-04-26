import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cyclone } from './cyclone.model';

@Injectable()
export class CycloneService {
  constructor(
    @InjectModel(Cyclone)
    private cycloneModel: typeof Cyclone,
  ) {}

  async findAndCountAll(): Promise<{ rows: Cyclone[]; count: number }> {
    return await this.cycloneModel.findAndCountAll({ raw: false });
  }

  async findOneByDisaster(disasterId: number): Promise<Cyclone> {
    return this.cycloneModel.findOne({ where: { disasterId: disasterId } });
  }
}
