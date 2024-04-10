import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Seisme } from './seisme.model';

@Injectable()
export class SeismeService {
  constructor(
    @InjectModel(Seisme)
    private seismeModel: typeof Seisme,
  ) {}

  async findAll(): Promise<Seisme[]> {
    return this.seismeModel.findAll();
  }
}
