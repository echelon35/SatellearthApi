import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FollowerService } from '../Application/Services/follower.service';
import { UserService } from '../Application/Services/user.service';
import { FollowerController } from '../Controllers/follower.controller';
import { UserController } from '../Controllers/user.controller';
import { Follower } from '../Domain/Models/follower.model';
import { Role } from '../Domain/Models/role.model';
import { BlockUser } from '../Domain/Models/block-user.model';
import { User } from '../Domain/Models/user.model';
import { Notification } from '../Domain/Models/notification.model';
import { SocialModule } from './social.module';
import { AdminController } from 'src/Controllers/admin.controller';

@Module({
  providers: [UserService, FollowerService],
  imports: [
    SequelizeModule.forFeature([User, Follower, Notification, Role, BlockUser]),
    SocialModule,
  ],
  controllers: [UserController, FollowerController, AdminController],
  exports: [UserService, FollowerService],
})
export class UserModule {}
