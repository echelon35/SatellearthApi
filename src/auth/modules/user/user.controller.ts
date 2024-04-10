import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './DTO/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<UserDto[]> {
    const users = await this.userService.findAll();
    return users;
  }
}
