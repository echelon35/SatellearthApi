import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdviceService } from '../Application/Services/advice.service';
import { AdviceController } from '../Controllers/advice.controller';
import { Advice } from '../Domain/Models/advice.model';

@Module({
  imports: [SequelizeModule.forFeature([Advice])],
  providers: [AdviceService],
  controllers: [AdviceController],
})
export class AdviceModule {}
