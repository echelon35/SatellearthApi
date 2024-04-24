import { Injectable } from '@nestjs/common';
import { UserService } from './modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { UserDto } from './modules/user/DTO/user.dto';
import { IGoogleLogin } from './interfaces/IGoogleLogin.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(user: UserDto): Promise<any> {
    return {
      access_token: this.jwtService.sign(user),
    };
  }

  async validateUser(mail: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(mail);
    if (user && compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async logout(id: number): Promise<boolean> {
    const user = await this.userService.findOneByPk(id);
    return await this.userService.logout(user);
  }

  async googleLogin(googleLogin: IGoogleLogin): Promise<any> {
    //First try to find him with his mail
    const user = await this.userService.findOrCreate(
      googleLogin?.email,
      googleLogin,
    );

    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
