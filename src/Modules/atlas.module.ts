import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Pays } from '../Domain/Models/pays.model';
import { Ville } from '../Domain/Models/ville.model';

@Module({
  imports: [SequelizeModule.forFeature([Pays, Ville])],
})
export class AtlasModule {}
