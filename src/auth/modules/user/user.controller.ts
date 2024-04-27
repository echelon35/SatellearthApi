import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './DTO/user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Public } from 'src/common/decorators/public.decorator';

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

  @Public()
  @Get('user/picture/:userId')
  async getPicture(@Param() params, @Response() res) {
    if (params.userId != null) {
      const picture = await this.userService.getPicture(
        parseInt(params.userId),
      );
      if (picture != null) {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        return res.end(picture);
      } else {
        throw new NotFoundException();
      }
    } else {
      throw new NotFoundException();
    }
  }
}
