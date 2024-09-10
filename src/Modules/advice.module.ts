import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdviceService } from 'src/Application/Services/advice.service';
import { AdviceController } from 'src/Controllers/advice.controller';
import { Advice } from 'src/Domain/Models/advice.model';

@Module({
  imports: [SequelizeModule.forFeature([Advice])],
  providers: [AdviceService],
  controllers: [AdviceController],
})
export class AdviceModule {}
