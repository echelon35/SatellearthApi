import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostService } from '../Application/Services/post.service';
import { CommentDisaster } from '../Domain/Models/comment-disaster.model';
import { CommentPost } from '../Domain/Models/comment-post.model';
import { LikePost } from '../Domain/Models/like-post.model';
import { Role } from '../Domain/Models/role.model';
import { BlockUser } from '../Domain/Models/block-user.model';
import { User } from '../Domain/Models/user.model';
import { Follower } from '../Domain/Models/follower.model';
import { Post } from '../Domain/Models/post.model';
import { Notification } from '../Domain/Models/notification.model';
import { BlockUserService } from '../Application/Services/block-user.service';
import { FeedController } from 'src/Controllers/feed.controller';
import { DisasterModule } from './disaster.module';

@Module({
  providers: [PostService, BlockUserService],
  imports: [
    DisasterModule,
    SequelizeModule.forFeature([
      CommentDisaster,
      CommentPost,
      LikePost,
      Post,
      User,
      Follower,
      Notification,
      Role,
      BlockUser,
    ]),
  ],
  controllers: [FeedController],
  exports: [PostService],
})
export class SocialModule {}
