import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Request,
  Response,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './DTO/user.dto';
import { Public } from 'src/common/decorators/public.decorator';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('users')
  async findAll(): Promise<UserDto[]> {
    const users = await this.userService.findAll();
    return users;
  }

  @Get('profile')
  async findMe(@Request() req): Promise<UserDto> {
    if (req.user != null) {
      const me = await this.userService.findMe(req?.user?.id);
      return me;
    } else {
      throw new NotFoundException();
    }
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
