import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AleaModule } from './alea/alea.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Alea } from './alea/alea.model';
import { Ville } from './ville/ville.model';
import { Source } from './source/source.model';
import { AdviceModule } from './advice/advice.module';
import { Advice } from './advice/advice.model';
import { Tweet } from './tweet/tweet.model';
import { User } from './user/user.model';
import { TweetModule } from './tweet/tweet.module';
import { UserModule } from './user/user.module';
import { SourceModule } from './source/source.module';
import { SearchPlace } from './search-place/search-place.model';
import { SearchPlaceModule } from './search-place/search-place.module';
import { Search } from './search/search.model';
import { SearchModule } from './search/search.module';
import { BlockUserModule } from './block-user/block-user.module';
import { BlockUser } from './block-user/block-user.model';
import { CommentDisasterModule } from './comment-disaster/comment-disaster.module';
import { CommentDisaster } from './comment-disaster/comment-disaster.model';
import { Favori } from './favori/favori.model';
import { CommentPostModule } from './comment-post/comment-post.module';
import { CommentPost } from './comment-post/comment-post.model';
import { Post } from './post/post.model';
import { PostModule } from './post/post.module';
import { FavoriModule } from './favori/favori.module';
import { FollowerModule } from './follower/follower.module';
import { Follower } from './follower/follower.model';
import { LikePostModule } from './like-post/like-post.module';
import { LikePost } from './like-post/like-post.model';
import { Bolide } from './alea/modules/bolide/bolide.model';
import { Cyclone } from './alea/modules/cyclone/cyclone.model';
import { Disaster } from './alea/modules/disaster/disaster.model';
import { Eruption } from './alea/modules/eruption/eruption.model';
import { Inondation } from './alea/modules/inondation/inondation.model';
import { Seisme } from './alea/modules/seisme/seisme.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    AleaModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.SATELLEARTH_API_DB_HOST || 'localhost',
      port: parseInt(process.env.SATELLEARTH_API_DB_PORT) || 5432,
      username: process.env.SATELLEARTH_API_DB_USER,
      password: process.env.SATELLEARTH_API_DB_PASSWORD,
      database: process.env.SATELLEARTH_API_DB_NAME,
      models: [
        Advice,
        Alea,
        BlockUser,
        Bolide,
        CommentDisaster,
        CommentPost,
        Cyclone,
        Disaster,
        Eruption,
        Favori,
        Follower,
        Inondation,
        LikePost,
        Post,
        Search,
        SearchPlace,
        Seisme,
        Source,
        Tweet,
        User,
        Ville,
      ],
    }),
    AdviceModule,
    TweetModule,
    UserModule,
    SourceModule,
    SearchPlaceModule,
    SearchModule,
    BlockUserModule,
    CommentDisasterModule,
    CommentPostModule,
    PostModule,
    FavoriModule,
    FollowerModule,
    LikePostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
