import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Search } from './search.model';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';

@Module({
  imports: [SequelizeModule.forFeature([Search])],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
