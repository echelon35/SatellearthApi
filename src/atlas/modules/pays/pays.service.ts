import { Injectable } from '@nestjs/common';
import { Pays } from './pays.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PaysService {
  constructor(
    @InjectModel(Pays)
    private paysModel: typeof Pays,
  ) {}

  async findAll(): Promise<Pays[]> {
    return this.paysModel.findAll();
  }

  async findOne(id: string): Promise<Pays> {
    return this.paysModel.findOne({
      where: {
        id,
      },
    });
  }
}
