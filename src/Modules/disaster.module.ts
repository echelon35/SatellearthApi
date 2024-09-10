import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Alea } from 'src/Domain/Models/alea.model';
import { Seisme } from 'src/Domain/Models/seisme.model';
import { Inondation } from 'src/Domain/Models/inondation.model';
import { Cyclone } from 'src/Domain/Models/cyclone.model';
import { Eruption } from 'src/Domain/Models/eruption.model';
import { Bolide } from 'src/Domain/Models/bolide.model';
import { DisasterService } from 'src/Application/Services/disaster.service';
import { DisasterController } from 'src/Controllers/disaster.controller';
import { Disaster } from 'src/Domain/Models/disaster.model';
import { AleaService } from 'src/Application/Services/alea.service';
import { BolideService } from 'src/Application/Services/bolide.service';
import { CycloneService } from 'src/Application/Services/cyclone.service';
import { EruptionService } from 'src/Application/Services/eruption.service';
import { InondationService } from 'src/Application/Services/inondation.service';
import { SeismeService } from 'src/Application/Services/seisme.service';
import { AleaController } from 'src/Controllers/alea.controller';
import { BolideController } from 'src/Controllers/bolide.controller';
import { CycloneController } from 'src/Controllers/cyclone.controller';
import { EruptionController } from 'src/Controllers/eruption.controller';
import { InondationController } from 'src/Controllers/inondation.controller';
import { SeismeController } from 'src/Controllers/seisme.controller';
import { Source } from 'src/Domain/Models/source.model';

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
