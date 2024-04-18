import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Source } from './source.model';

@Injectable()
export class SourceService {
  constructor(
    @InjectModel(Source)
    private sourceModel: typeof Source,
  ) {}

  async findAndCountAll(): Promise<{ rows: Source[]; count: number }> {
    return await this.sourceModel.findAndCountAll();
  }
}
