import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserController } from './user.controller';

@Module({
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
})
export class UserModule {}
