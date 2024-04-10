import { Module } from '@nestjs/common';
import { CommentDisasterService } from './comment-disaster.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommentDisaster } from './comment-disaster.model';
import { CommentDisasterController } from './comment-disaster.controller';

@Module({
  providers: [CommentDisasterService],
  imports: [SequelizeModule.forFeature([CommentDisaster])],
  controllers: [CommentDisasterController],
})
export class CommentDisasterModule {}
