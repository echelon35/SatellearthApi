import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bolide } from './bolide.model';

@Injectable()
export class BolideService {
  constructor(
    @InjectModel(Bolide)
    private bolideModel: typeof Bolide,
  ) {}

  async findAll(): Promise<Bolide[]> {
    return await this.bolideModel.findAll();
  }
}
