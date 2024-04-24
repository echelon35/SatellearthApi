import { Module } from '@nestjs/common';
import { InondationService } from './inondation.service';
import { InondationController } from './inondation.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Inondation } from './inondation.model';

@Module({
  providers: [InondationService],
  controllers: [InondationController],
  imports: [SequelizeModule.forFeature([Inondation])],
  exports: [InondationService],
})
export class InondationModule {}
