import { Module } from '@nestjs/common';
import { FavoriService } from './favori.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Favori } from './favori.model';
import { FavoriController } from './favori.controller';

@Module({
  providers: [FavoriService],
  imports: [SequelizeModule.forFeature([Favori])],
  controllers: [FavoriController],
})
export class FavoriModule {}
