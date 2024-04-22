import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './DTO/user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('users')
  async findAll(): Promise<UserDto[]> {
    const users = await this.userService.findAll();
    return users;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('picture')
  async getPicture(@Request() req) {
    const picture = await this.userService.getPicture(req.user.id);
    return picture;
  }
}
