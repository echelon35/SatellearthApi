import { Controller, Get, Request } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notifications')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Get('count')
  async countNotifications(@Request() req) {
    const notificationsNb = await this.notificationService.countNotifications(
      req?.user?.id,
    );
    return { count: notificationsNb };
  }

  @Get('')
  async getUserNotifications(@Request() req) {
    const notifications = await this.notificationService.getUserNotifications(
      req?.user?.id,
    );
    return notifications;
  }
}
