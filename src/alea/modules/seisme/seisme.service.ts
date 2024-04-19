import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Seisme } from './seisme.model';

@Injectable()
export class SeismeService {
  constructor(
    @InjectModel(Seisme)
    private seismeModel: typeof Seisme,
  ) {}

  async findAndCountAll(): Promise<{ rows: Seisme[]; count: number }> {
    return this.seismeModel.findAndCountAll({ raw: false });
  }

  async findOneByDisaster(disasterId: number): Promise<Seisme> {
    return this.seismeModel.findOne({ where: { disasterId: disasterId } });
  }
}
