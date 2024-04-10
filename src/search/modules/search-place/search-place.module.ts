import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SearchPlace } from './search-place.model';
import { SearchPlaceService } from './search-place.service';
import { SearchPlaceController } from './search-place.controller';

@Module({
  imports: [SequelizeModule.forFeature([SearchPlace])],
  providers: [SearchPlaceService],
  controllers: [SearchPlaceController],
})
export class SearchPlaceModule {}
