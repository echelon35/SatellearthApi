import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Request,
  Response,
  Get,
  ForbiddenException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/common/decorators/public.decorator';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(@Request() req) {
    return this.authService.logout(req?.user?.id);
  }

  // @HttpCode(HttpStatus.OK)
  // @Public()
  // @Post('signup')
  // signUp(@Body() signUpDto: SignupDto) {
  //   return this.authService.signUp(signUpDto);
  // }

  @Get('google')
  @Public()
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/redirect')
  @Public()
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Request() req, @Response() res) {
    const token = await this.authService.googleLogin(req.user);
    if (token) {
      return res.redirect(
        `http://localhost:4200/home?access_token=${token.access_token}`,
      );
    } else {
      throw new ForbiddenException();
    }
  }
}
