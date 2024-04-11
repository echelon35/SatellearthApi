import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Pays } from './pays.model';
import { PaysService } from './pays.service';

@Module({
  imports: [SequelizeModule.forFeature([Pays])],
  providers: [PaysService],
  controllers: [PaysController],
})
export class PaysModule {}
