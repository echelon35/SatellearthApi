import { Module } from '@nestjs/common';
import { SeismeService } from './seisme.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Seisme } from './seisme.model';
import { SeismeController } from './seisme.controller';

@Module({
  imports: [SequelizeModule.forFeature([Seisme])],
  providers: [SeismeService],
  controllers: [SeismeController],
})
export class SeismeModule {}
