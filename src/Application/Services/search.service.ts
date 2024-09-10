import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Search } from '../../Domain/Models/search.model';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(Search)
    private searchModel: typeof Search,
  ) {}

  async findAll(): Promise<Search[]> {
    return this.searchModel.findAll();
  }
}
