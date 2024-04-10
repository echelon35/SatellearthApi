import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tweet } from './tweet.model';
import { TweetController } from './tweet.controller';

@Module({
  providers: [TweetService],
  imports: [SequelizeModule.forFeature([Tweet])],
  controllers: [TweetController],
})
export class TweetModule {}
