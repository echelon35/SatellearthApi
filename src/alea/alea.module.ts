import { Module } from '@nestjs/common';
import { AleaService } from './alea.service';
import { AleaController } from './alea.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Alea } from './alea.model';

@Module({
  imports: [SequelizeModule.forFeature([Alea])],
  providers: [AleaService],
  controllers: [AleaController],
})
export class AleaModule {}
