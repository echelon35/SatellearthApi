import { Module } from '@nestjs/common';
import { BolideService } from './bolide.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bolide } from './bolide.model';
import { BolideController } from './bolide.controller';

@Module({
  providers: [BolideService],
  imports: [SequelizeModule.forFeature([Bolide])],
  controllers: [BolideController],
  exports: [BolideService],
})
export class BolideModule {}
