import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FollowerService } from 'src/Application/Services/follower.service';
import { UserService } from 'src/Application/Services/user.service';
import { FollowerController } from 'src/Controllers/follower.controller';
import { UserController } from 'src/Controllers/user.controller';
import { Follower } from 'src/Domain/Models/follower.model';
import { Role } from 'src/Domain/Models/role.model';
import { BlockUser } from 'src/Domain/Models/block-user.model';
import { User } from 'src/Domain/Models/user.model';
import { Notification } from 'src/Domain/Models/notification.model';
import { SocialModule } from './social.module';

@Module({
  providers: [UserService, FollowerService],
  imports: [
    SequelizeModule.forFeature([User, Follower, Notification, Role, BlockUser]),
    SocialModule,
  ],
  controllers: [UserController, FollowerController],
  exports: [UserService, FollowerService],
})
export class UserModule {}
