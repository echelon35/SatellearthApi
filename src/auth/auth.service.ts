import { Injectable } from '@nestjs/common';
import { UserService } from './modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ISignUp } from './interfaces/isignup.interface';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(user: any): Promise<any> {
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(signUp: ISignUp) {
    const user = await this.userService.create(signUp);
    return user;
  }

  async validateUser(mail: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(mail);
    if (user && compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
