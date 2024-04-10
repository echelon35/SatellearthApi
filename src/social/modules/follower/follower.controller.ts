import { Controller, Get } from '@nestjs/common';
import { FollowerService } from './follower.service';
import { FollowerDto } from './DTO/follower.dto';

@Controller('follower')
export class FollowerController {
  constructor(private followerService: FollowerService) {}

  @Get()
  async findAll(): Promise<FollowerDto[]> {
    const followers = await this.followerService.findAll();
    return followers;
  }
}
