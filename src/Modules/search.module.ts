import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SearchService } from '../Application/Services/search.service';
import { SearchController } from '../Controllers/search.controller';
import { SearchPlace } from '../Domain/Models/search-place.model';
import { Search } from '../Domain/Models/search.model';

@Module({
  imports: [SequelizeModule.forFeature([Search, SearchPlace])],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
