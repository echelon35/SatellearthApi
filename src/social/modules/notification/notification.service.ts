import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Notification } from './notification.model';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification)
    private notificationModel: typeof Notification,
  ) {}

  async countNotifications(userId: number) {
    return this.notificationModel.count({ where: { userId: userId } });
  }

  async getUserNotifications(userId: number) {
    return this.notificationModel.findAll({ where: { userId: userId } });
  }
}
