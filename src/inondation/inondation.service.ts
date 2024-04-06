import { Injectable } from '@nestjs/common';
import { Inondation } from './inondation.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class InondationService {
  constructor(
    @InjectModel(Inondation)
    private inondationModel: typeof Inondation,
  ) {}

  async findAll(): Promise<Inondation[]> {
    return this.inondationModel.findAll();
  }
}
