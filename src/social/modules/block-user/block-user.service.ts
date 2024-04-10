import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BlockUser } from './block-user.model';

@Injectable()
export class BlockUserService {
  constructor(
    @InjectModel(BlockUser)
    private blockUserModel: typeof BlockUser,
  ) {}

  async findAll(): Promise<BlockUser[]> {
    return this.blockUserModel.findAll();
  }
}
