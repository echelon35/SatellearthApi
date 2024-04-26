import { Module } from '@nestjs/common';
import { CycloneService } from './cyclone.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cyclone } from './cyclone.model';
import { CycloneController } from './cyclone.controller';

@Module({
  providers: [CycloneService],
  imports: [SequelizeModule.forFeature([Cyclone])],
  controllers: [CycloneController],
  exports: [CycloneService],
})
export class CycloneModule {}
