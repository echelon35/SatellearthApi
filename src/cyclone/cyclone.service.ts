import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cyclone } from './cyclone.model';

@Injectable()
export class CycloneService {
  constructor(
    @InjectModel(Cyclone)
    private cycloneModel: typeof Cyclone,
  ) {}

  async findAll(): Promise<Cyclone[]> {
    return await this.cycloneModel.findAll();
  }
}
