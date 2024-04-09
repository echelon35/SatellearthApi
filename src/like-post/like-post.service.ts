import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LikePost } from './like-post.model';

@Injectable()
export class LikePostService {
  constructor(
    @InjectModel(LikePost)
    private likePostModel: typeof LikePost,
  ) {}

  async findAll(): Promise<LikePost[]> {
    return await this.likePostModel.findAll();
  }
}
