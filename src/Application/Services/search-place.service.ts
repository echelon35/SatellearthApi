import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SearchPlace } from 'src/Domain/Models/search-place.model';

@Injectable()
export class SearchPlaceService {
  constructor(
    @InjectModel(SearchPlace)
    private searchPlaceModel: typeof SearchPlace,
  ) {}

  async findAll(): Promise<SearchPlace[]> {
    return await this.searchPlaceModel.findAll();
  }
}
