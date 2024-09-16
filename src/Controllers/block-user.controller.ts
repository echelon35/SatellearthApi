import { Controller, Get, Request } from '@nestjs/common';
import { BlockUserService } from '../Application/Services/block-user.service';
import { BlockUserDto } from '../Domain/DTO/block-user.dto';

@Controller()
export class BlockUserController {
  constructor(private blockUserService: BlockUserService) {}

  @Get('block-users')
  async blockedByUser(@Request() req): Promise<BlockUserDto[]> {
    const blockedUsers = await this.blockUserService.blockedByUser(req.user.id);
    return blockedUsers;
  }

  @Get('invisible-users')
  async invisibleByUser(@Request() req): Promise<BlockUserDto[]> {
    const invisibleUsers = await this.blockUserService.blockedAndBloker(
      req.user.id,
    );
    return invisibleUsers;
  }
}
