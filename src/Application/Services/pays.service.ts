import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Pays } from 'src/Domain/Models/pays.model';

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
