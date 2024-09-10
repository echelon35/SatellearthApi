import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { APP_GUARD } from '@nestjs/core';
import { Advice } from './Domain/Models/advice.model';
import { Notification } from './Domain/Models/notification.model';
import { Alea } from './Domain/Models/alea.model';
import { BlockUser } from './Domain/Models/block-user.model';
import { Bolide } from './Domain/Models/bolide.model';
import { CommentDisaster } from './Domain/Models/comment-disaster.model';
import { CommentPost } from './Domain/Models/comment-post.model';
import { Cyclone } from './Domain/Models/cyclone.model';
import { Disaster } from './Domain/Models/disaster.model';
import { Eruption } from './Domain/Models/eruption.model';
import { Favori } from './Domain/Models/favori.model';
import { Follower } from './Domain/Models/follower.model';
import { Inondation } from './Domain/Models/inondation.model';
import { LikePost } from './Domain/Models/like-post.model';
import { Role, UserRole } from './Domain/Models/role.model';
import { SearchPlace } from './Domain/Models/search-place.model';
import { Seisme } from './Domain/Models/seisme.model';
import { Source } from './Domain/Models/source.model';
import { User } from './Domain/Models/user.model';
import { Ville } from './Domain/Models/ville.model';
import { JwtAuthGuard } from './Guards/jwt-auth.guard';
import { AuthModule } from './Modules/auth.module';
import { SearchModule } from './Modules/search.module';
import { SocialModule } from './Modules/social.module';
import { Post } from './Domain/Models/post.model';
import { Search } from './Domain/Models/search.model';
import { Module } from '@nestjs/common/decorators';
import { DisasterModule } from './Modules/disaster.module';
import { AdviceModule } from './Modules/advice.module';
import { AtlasModule } from './Modules/atlas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
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
        Notification,
        Post,
        Role,
        Search,
        SearchPlace,
        Seisme,
        Source,
        User,
        UserRole,
        Ville,
      ],
    }),
    SearchModule,
    AuthModule,
    AtlasModule,
    DisasterModule,
    SocialModule,
    AdviceModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    //Here I make all my routes controlled by the authguard (token is required)
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
