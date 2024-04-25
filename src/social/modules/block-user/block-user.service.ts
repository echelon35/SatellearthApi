import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BlockUser } from './block-user.model';
import { Op } from 'sequelize';

@Injectable()
export class BlockUserService {
  constructor(
    @InjectModel(BlockUser)
    private blockUserModel: typeof BlockUser,
  ) {}

  async blockedByUser(idUser: number): Promise<BlockUser[]> {
    return this.blockUserModel.findAll({ where: { userId: idUser } });
  }

  /**
   * User can't see posts of the ones he blocked and the ones who blocked him
   * @param idUser
   */
  async blockedAndBloker(idUser: number) {
    return this.blockUserModel.findAll({
      where: {
        [Op.or]: {
          userId: idUser,
          blockedId: idUser,
        },
      },
      raw: true,
    });
  }
}
