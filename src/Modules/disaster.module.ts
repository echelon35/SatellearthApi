import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Alea } from '../Domain/Models/alea.model';
import { Seisme } from '../Domain/Models/seisme.model';
import { Inondation } from '../Domain/Models/inondation.model';
import { Cyclone } from '../Domain/Models/cyclone.model';
import { Eruption } from '../Domain/Models/eruption.model';
import { Bolide } from '../Domain/Models/bolide.model';
import { DisasterService } from '../Application/Services/disaster.service';
import { DisasterController } from '../Controllers/disaster.controller';
import { Disaster } from '../Domain/Models/disaster.model';
import { AleaService } from '../Application/Services/alea.service';
import { BolideService } from '../Application/Services/bolide.service';
import { CycloneService } from '../Application/Services/cyclone.service';
import { EruptionService } from '../Application/Services/eruption.service';
import { InondationService } from '../Application/Services/inondation.service';
import { SeismeService } from '../Application/Services/seisme.service';
import { AleaController } from '../Controllers/alea.controller';
import { BolideController } from '../Controllers/bolide.controller';
import { CycloneController } from '../Controllers/cyclone.controller';
import { EruptionController } from '../Controllers/eruption.controller';
import { InondationController } from '../Controllers/inondation.controller';
import { SeismeController } from '../Controllers/seisme.controller';
import { Source } from '../Domain/Models/source.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Disaster,
      Alea,
      Seisme,
      Inondation,
      Cyclone,
      Eruption,
      Bolide,
      Source,
    ]),
  ],
  providers: [
    DisasterService,
    AleaService,
    SeismeService,
    InondationService,
    CycloneService,
    EruptionService,
    BolideService,
  ],
  controllers: [
    DisasterController,
    AleaController,
    SeismeController,
    InondationController,
    CycloneController,
    EruptionController,
    BolideController,
  ],
  exports: [
    DisasterService,
    AleaService,
    SeismeService,
    InondationService,
    CycloneService,
    EruptionService,
    BolideService,
  ],
})
export class DisasterModule {}
