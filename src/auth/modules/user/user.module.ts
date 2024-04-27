import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserController } from './user.controller';
import { PostModule } from 'src/social/modules/post/post.module';
import { FollowerModule } from 'src/social/modules/follower/follower.module';

@Module({
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User]), PostModule, FollowerModule],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
