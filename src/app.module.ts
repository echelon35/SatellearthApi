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
      models: [Alea, Seisme, Disaster, Ville, Source],
    }),
    SeismeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
