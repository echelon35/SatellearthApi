import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Disaster } from './disaster.model';

@Injectable()
export class DisasterService {
  constructor(
    @InjectModel(Disaster)
    private disasterModel: typeof Disaster,
  ) {}

  async findAll(): Promise<Disaster[]> {
    return this.disasterModel.findAll();
  }
}
