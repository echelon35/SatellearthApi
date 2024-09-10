import { Controller, Get, Request } from '@nestjs/common';
import { FollowerService } from 'src/Application/Services/follower.service';
import { FollowerDto } from 'src/Domain/DTO/follower.dto';

@Controller()
export class FollowerController {
  constructor(private followerService: FollowerService) {}

  @Get('followers')
  async getFollowersOfUser(@Request() req): Promise<FollowerDto[]> {
    const followers = await this.followerService.findAllFollowers(
      req?.user?.id,
    );
    return followers;
  }

  @Get('subscriptions')
  async getSubscriptionsOfUser(@Request() req): Promise<FollowerDto[]> {
    const followers = await this.followerService.findAllSubscriptions(
      req?.user?.id,
    );
    return followers;
  }
}
