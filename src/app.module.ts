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
  ],
  providers: [AppService],
})
export class AppModule {}
