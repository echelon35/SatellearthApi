import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Advice } from './advice.model';
import { AdviceService } from './advice.service';
import { AdviceController } from './advice.controller';

@Module({
  imports: [SequelizeModule.forFeature([Advice])],
  providers: [AdviceService],
  controllers: [AdviceController],
})
export class AdviceModule {}
