import { Controller, Get } from '@nestjs/common';
import { BlockUserService } from './block-user.service';
import { BlockUserDto } from './DTO/block-user.dto';

@Controller('block-user')
export class BlockUserController {
  constructor(private blockUserService: BlockUserService) {}

  @Get()
  async findAll(): Promise<BlockUserDto[]> {
    const blockedUsers = await this.blockUserService.findAll();
    return blockedUsers;
  }
}
