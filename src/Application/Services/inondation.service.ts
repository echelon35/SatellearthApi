import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Inondation } from '../../Domain/Models/inondation.model';

@Injectable()
export class InondationService {
  constructor(
    @InjectModel(Inondation)
    private inondationModel: typeof Inondation,
  ) {}

  async findAndCountAll(): Promise<{ rows: Inondation[]; count: number }> {
    return this.inondationModel.findAndCountAll({ raw: false });
  }

  async findOneByDisaster(disasterId: number): Promise<Inondation> {
    return this.inondationModel.findOne({ where: { disasterId: disasterId } });
  }
}
