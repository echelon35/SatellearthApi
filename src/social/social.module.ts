import { Module } from '@nestjs/common';
import { AdviceModule } from './modules/advice/advice.module';
import { BlockUserModule } from './modules/block-user/block-user.module';
import { CommentDisasterModule } from './modules/comment-disaster/comment-disaster.module';
import { CommentPostModule } from './modules/comment-post/comment-post.module';
import { FavoriModule } from './modules/favori/favori.module';
import { FollowerModule } from './modules/follower/follower.module';
import { LikePostModule } from './modules/like-post/like-post.module';
import { PostModule } from './modules/post/post.module';
import { TweetModule } from './modules/tweet/tweet.module';
import { NotificationModule } from './modules/notification/notifcation.module';

@Module({
  imports: [
    AdviceModule,
    BlockUserModule,
    CommentDisasterModule,
    CommentPostModule,
    FavoriModule,
    FollowerModule,
    LikePostModule,
    NotificationModule,
    PostModule,
    TweetModule,
  ],
})
export class SocialModule {}
