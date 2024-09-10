import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostService } from 'src/Application/Services/post.service';
import { CommentDisaster } from 'src/Domain/Models/comment-disaster.model';
import { CommentPost } from 'src/Domain/Models/comment-post.model';
import { LikePost } from 'src/Domain/Models/like-post.model';
import { Role } from 'src/Domain/Models/role.model';
import { BlockUser } from 'src/Domain/Models/block-user.model';
import { User } from 'src/Domain/Models/user.model';
import { Follower } from 'src/Domain/Models/follower.model';
import { Post } from 'src/Domain/Models/post.model';
import { Notification } from 'src/Domain/Models/notification.model';
import { BlockUserService } from 'src/Application/Services/block-user.service';

@Module({
  providers: [PostService, BlockUserService],
  imports: [
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
  exports: [PostService],
})
export class SocialModule {}
