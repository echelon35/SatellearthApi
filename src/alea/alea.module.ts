import { Module } from '@nestjs/common';
import { AleaService } from './alea.service';
import { AleaController } from './alea.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Alea } from './alea.model';
import { BolideModule } from './modules/bolide/bolide.module';
import { CycloneModule } from './modules/cyclone/cyclone.module';
import { EruptionModule } from './modules/eruption/eruption.module';
import { InondationModule } from './modules/inondation/inondation.module';
import { SeismeModule } from './modules/seisme/seisme.module';
import { DisasterModule } from './modules/disaster/disaster.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Alea]),
    BolideModule,
    CycloneModule,
    DisasterModule,
    EruptionModule,
    InondationModule,
    SeismeModule,
  ],
  providers: [AleaService],
  controllers: [AleaController],
})
export class AleaModule {}
