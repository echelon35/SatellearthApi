import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Advice } from '../../Domain/Models/advice.model';

@Injectable()
export class AdviceService {
  constructor(
    @InjectModel(Advice)
    private adviceModel: typeof Advice,
  ) {}

  async findAll(): Promise<Advice[]> {
    return this.adviceModel.findAll();
  }
}
