import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Alea } from 'src/Domain/Models/alea.model';

@Injectable()
export class AleaService {
  constructor(
    @InjectModel(Alea)
    private aleaModel: typeof Alea,
  ) {}

  async findAll(): Promise<Alea[]> {
    return this.aleaModel.findAll();
  }

  async findOne(id: string): Promise<Alea> {
    return this.aleaModel.findOne({
      where: {
        id,
      },
    });
  }
}
