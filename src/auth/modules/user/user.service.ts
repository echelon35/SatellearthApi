import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { SignupDto } from 'src/auth/DTO/signup.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll();
  }

  async findOne(mail: string): Promise<User> {
    return await this.userModel.scope('login').findOne({
      where: { mail: `${mail}` },
      raw: true,
    });
  }

  async create(user: SignupDto) {
    return user;
  }

  async getPicture(id: number) {
    return await this.userModel.scope('picture').findOne({
      where: { id: id },
    });
  }
}
