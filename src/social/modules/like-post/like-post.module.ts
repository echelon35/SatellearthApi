import { Module } from '@nestjs/common';
import { LikePostService } from './like-post.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { LikePost } from './like-post.model';
import { LikePostController } from './like-post.controller';

@Module({
  providers: [LikePostService],
  imports: [SequelizeModule.forFeature([LikePost])],
  controllers: [LikePostController],
})
export class LikePostModule {}
