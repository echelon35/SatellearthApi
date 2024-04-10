import { Module } from '@nestjs/common';
import { CommentPostService } from './comment-post.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommentPost } from './comment-post.model';
import { CommentPostController } from './comment-post.controller';

@Module({
  providers: [CommentPostService],
  imports: [SequelizeModule.forFeature([CommentPost])],
  controllers: [CommentPostController],
})
export class CommentPostModule {}
