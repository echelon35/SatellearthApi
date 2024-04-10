import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Source } from './source.model';

@Injectable()
export class SourceService {
  constructor(
    @InjectModel(Source)
    private sourceModel: typeof Source,
  ) {}

  async findAll(): Promise<Source[]> {
    return await this.sourceModel.findAll();
  }
}
