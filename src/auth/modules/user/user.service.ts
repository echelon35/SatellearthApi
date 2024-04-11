import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll();
  }

  async findOne(username: string): Promise<User> {
    return await this.userModel.findOne({ where: { username: `${username}` } });
  }
}
