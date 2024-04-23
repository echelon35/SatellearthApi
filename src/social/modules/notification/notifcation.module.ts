import { SequelizeModule } from '@nestjs/sequelize';
import { Notification } from './notification.model';
import { NotificationService } from './notification.service';
import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';

@Module({
  providers: [NotificationService],
  imports: [SequelizeModule.forFeature([Notification])],
  controllers: [NotificationController],
})
export class NotificationModule {}
