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
  async logout(user: User): Promise<boolean> {
    user.last_connexion = new Date();
    const updatedUser = await this.userModel.update(user, {
      where: { id: user.id },
    });
    return updatedUser.length == 1;
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
