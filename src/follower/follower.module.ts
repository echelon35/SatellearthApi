import { Module } from '@nestjs/common';
import { FollowerService } from './follower.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Follower } from './follower.model';
import { FollowerController } from './follower.controller';

@Module({
  providers: [FollowerService],
  imports: [SequelizeModule.forFeature([Follower])],
  controllers: [FollowerController],
})
export class FollowerModule {}
