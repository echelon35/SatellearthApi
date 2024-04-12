import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Disaster } from './disaster.model';
import { GetAllDisasters } from './DTO/getAllDisaster.dto';

@Injectable()
export class DisasterService {
  constructor(
    @InjectModel(Disaster)
    private disasterModel: typeof Disaster,
  ) {}

  async findAll(params: GetAllDisasters): Promise<Disaster[]> {
    return this.disasterModel.findAll(params);
  }
}
