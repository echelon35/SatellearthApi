import { Module } from '@nestjs/common';
import { SourceService } from './source.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Source } from './source.model';
import { SourceController } from './source.controller';

@Module({
  providers: [SourceService],
  imports: [SequelizeModule.forFeature([Source])],
  controllers: [SourceController],
})
export class SourceModule {}
