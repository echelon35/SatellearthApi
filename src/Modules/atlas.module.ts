import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Pays } from 'src/Domain/Models/pays.model';
import { Ville } from 'src/Domain/Models/ville.model';

@Module({
  imports: [SequelizeModule.forFeature([Pays, Ville])],
})
export class AtlasModule {}
