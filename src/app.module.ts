import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AleaController } from './alea/alea.controller';
import { AleaModule } from './alea/alea.module';
import { DisasterController } from './disaster/disaster.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { SeismeController } from './seisme/seisme.controller';
import { VilleController } from './ville/ville.controller';
import { SourceController } from './source/source.controller';
import { UserController } from './user/user.controller';
import { RoleController } from './role/role.controller';
import { AdviceController } from './advice/advice.controller';
import { BlockUserController } from './block-user/block-user.controller';
import { BolideController } from './bolide/bolide.controller';
import { CommentDisasterController } from './comment-disaster/comment-disaster.controller';
import { CommentPostController } from './comment-post/comment-post.controller';
import { CycloneController } from './cyclone/cyclone.controller';
import { EruptionController } from './eruption/eruption.controller';
import { FavoriController } from './favori/favori.controller';
import { FollowerController } from './follower/follower.controller';
import { InondationController } from './inondation/inondation.controller';
import { LikePostController } from './like-post/like-post.controller';
import { NotificationController } from './notification/notification.controller';
import { PaysController } from './pays/pays.controller';
import { PlaceTypesController } from './place_types/place_types.controller';
import { PlacesController } from './places/places.controller';
import { PostController } from './post/post.controller';
import { SavedSearchController } from './saved-search/saved-search.controller';
import { SearchPlaceController } from './search-place/search-place.controller';
import { SearchController } from './search/search.controller';
import { TweetController } from './tweet/tweet.controller';

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
      models: [],
    }),
  ],
  controllers: [
    AppController,
    AleaController,
    DisasterController,
    SeismeController,
    VilleController,
    SourceController,
    UserController,
    RoleController,
    AdviceController,
    BlockUserController,
    BolideController,
    CommentDisasterController,
    CommentPostController,
    CycloneController,
    EruptionController,
    FavoriController,
    FollowerController,
    InondationController,
    LikePostController,
    NotificationController,
    PaysController,
    PlaceTypesController,
    PlacesController,
    PostController,
    SavedSearchController,
    SearchPlaceController,
    SearchController,
    TweetController,
  ],
  providers: [AppService],
})
export class AppModule {}
