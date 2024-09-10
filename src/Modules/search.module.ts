import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SearchService } from 'src/Application/Services/search.service';
import { SearchController } from 'src/Controllers/search.controller';
import { SearchPlace } from 'src/Domain/Models/search-place.model';
import { Search } from 'src/Domain/Models/search.model';

@Module({
  imports: [SequelizeModule.forFeature([Search, SearchPlace])],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
