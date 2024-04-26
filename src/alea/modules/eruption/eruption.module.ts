import { Module } from '@nestjs/common';
import { EruptionService } from './eruption.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Eruption } from './eruption.model';
import { EruptionController } from './eruption.controller';

@Module({
  imports: [SequelizeModule.forFeature([Eruption])],
  providers: [EruptionService],
  controllers: [EruptionController],
  exports: [EruptionService],
})
export class EruptionModule {}
