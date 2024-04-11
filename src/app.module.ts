import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AleaModule } from './alea/alea.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Alea } from './alea/alea.model';
import { Search } from './search/search.model';
import { SearchModule } from './search/search.module';
import { Bolide } from './alea/modules/bolide/bolide.model';
import { Cyclone } from './alea/modules/cyclone/cyclone.model';
import { Disaster } from './alea/modules/disaster/disaster.model';
import { Eruption } from './alea/modules/eruption/eruption.model';
import { Inondation } from './alea/modules/inondation/inondation.model';
import { Seisme } from './alea/modules/seisme/seisme.model';
import { AuthModule } from './auth/auth.module';
import { SocialModule } from './social/social.module';
import { AtlasModule } from './atlas/atlas.module';
import { Advice } from './social/modules/advice/advice.model';
import { BlockUser } from './social/modules/block-user/block-user.model';
import { CommentDisaster } from './social/modules/comment-disaster/comment-disaster.model';
import { CommentPost } from './social/modules/comment-post/comment-post.model';
import { Favori } from './social/modules/favori/favori.model';
import { Follower } from './social/modules/follower/follower.model';
import { LikePost } from './social/modules/like-post/like-post.model';
import { Post } from './social/modules/post/post.model';
import { SearchPlace } from './search/modules/search-place/search-place.model';
import { Source } from './alea/modules/source/source.model';
import { Tweet } from './social/modules/tweet/tweet.model';
import { User } from './auth/modules/user/user.model';
import { Ville } from './atlas/modules/ville/ville.model';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { Role, UserRole } from './auth/modules/role/role.model';

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
        Role,
        Search,
        SearchPlace,
        Seisme,
        Source,
        Tweet,
        User,
        UserRole,
        Ville,
      ],
    }),
    SearchModule,
    AuthModule,
    SocialModule,
    AtlasModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    //Here I make all my routes controlled by the authguard (token is required)
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
