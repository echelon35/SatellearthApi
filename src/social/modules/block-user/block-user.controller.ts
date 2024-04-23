import { Controller, Get, Request } from '@nestjs/common';
import { BlockUserService } from './block-user.service';
import { BlockUserDto } from './DTO/block-user.dto';

@Controller('block-users')
export class BlockUserController {
  constructor(private blockUserService: BlockUserService) {}

  @Get()
  async blockedByUser(@Request() req): Promise<BlockUserDto[]> {
    const blockedUsers = await this.blockUserService.blockedByUser(req.user.id);
    return blockedUsers;
  }
}
