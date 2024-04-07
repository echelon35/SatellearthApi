import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Disaster } from './disaster.model';
import { DisasterService } from './disaster.service';
import { DisasterController } from './disaster.controller';

@Module({
  imports: [SequelizeModule.forFeature([Disaster])],
  providers: [DisasterService],
  controllers: [DisasterController],
})
export class DisasterModule {}
