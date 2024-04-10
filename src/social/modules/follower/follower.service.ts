import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Follower } from './follower.model';

@Injectable()
export class FollowerService {
  constructor(
    @InjectModel(Follower)
    private followerModel: typeof Follower,
  ) {}

  async findAll(): Promise<Follower[]> {
    return await this.followerModel.findAll();
  }
}
