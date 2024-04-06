import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Eruption } from './eruption.model';

@Injectable()
export class EruptionService {
  constructor(
    @InjectModel(Eruption)
    private eruptionModel: typeof Eruption,
  ) {}

  async findAll(): Promise<Eruption[]> {
    return this.eruptionModel.findAll();
  }
}
