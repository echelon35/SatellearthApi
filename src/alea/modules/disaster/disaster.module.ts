import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Disaster } from './disaster.model';
import { DisasterService } from './disaster.service';
import { DisasterController } from './disaster.controller';
import { SeismeModule } from '../seisme/seisme.module';
import { InondationModule } from '../inondation/inondation.module';
import { CycloneModule } from '../cyclone/cyclone.module';
import { EruptionModule } from '../eruption/eruption.module';
import { BolideModule } from '../bolide/bolide.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Disaster]),
    SeismeModule,
    InondationModule,
    BolideModule,
    CycloneModule,
    EruptionModule,
  ],
  providers: [DisasterService],
  controllers: [DisasterController],
  exports: [DisasterService],
})
export class DisasterModule {}
