import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { ICreateUser } from './Interfaces/ICreateUser';

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

  async findOneByPk(id: number, scope: string = ''): Promise<User> {
    if (scope != '') {
      return await this.userModel.scope(scope).findByPk(id, { raw: true });
    } else {
      return await this.userModel.findByPk(id, { raw: true });
    }
  }

  async logout(user: User): Promise<boolean> {
    user.last_connexion = new Date();
    const updatedUser = await this.userModel.update(user, {
      where: { id: user.id },
    });
    return updatedUser.length == 1;
  }

  async getPicture(id: number) {
    return await this.userModel.scope('picture').findOne({
      where: { id: id },
    });
  }

  async findOrCreate(mail: string, user: ICreateUser): Promise<User> {
    const [userFound, created] = await this.userModel.findOrCreate({
      where: { mail: user?.email },
      raw: true,
      defaults: {
        mail: user.email,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        avatar: user.picture,
      },
    });

    let newUser;
    if (created) {
      newUser = userFound.get();
    } else {
      newUser = userFound;
    }
    return newUser;
  }
}
