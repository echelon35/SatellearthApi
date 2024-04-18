import { Injectable } from '@nestjs/common';
import { Inondation } from './inondation.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class InondationService {
  constructor(
    @InjectModel(Inondation)
    private inondationModel: typeof Inondation,
  ) {}

  async findAndCountAll(): Promise<{ rows: Inondation[]; count: number }> {
    return this.inondationModel.findAndCountAll({ raw: false });
  }
}
