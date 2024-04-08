import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AleaModule } from './alea/alea.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Alea } from './alea/alea.model';
import { SeismeModule } from './seisme/seisme.module';
import { Seisme } from './seisme/seisme.model';
import { Disaster } from './disaster/disaster.model';
import { Ville } from './ville/ville.model';
import { Source } from './source/source.model';
import { Eruption } from './eruption/eruption.model';
import { EruptionModule } from './eruption/eruption.module';
import { InondationModule } from './inondation/inondation.module';
import { Inondation } from './inondation/inondation.model';
import { DisasterModule } from './disaster/disaster.module';
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
import { BolideModule } from './bolide/bolide.module';
import { Bolide } from './bolide/bolide.model';

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
        Disaster,
        Eruption,
        Inondation,
        Search,
        SearchPlace,
        Seisme,
        Source,
        Tweet,
        User,
        Ville,
      ],
    }),
    SeismeModule,
    EruptionModule,
    InondationModule,
    DisasterModule,
    AdviceModule,
    TweetModule,
    UserModule,
    SourceModule,
    SearchPlaceModule,
    SearchModule,
    BlockUserModule,
    BolideModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
