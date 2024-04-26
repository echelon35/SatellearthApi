import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LikePost } from './like-post.model';
import { Op } from 'sequelize';
import { User } from 'src/auth/modules/user/user.model';

@Injectable()
export class LikePostService {
  constructor(
    @InjectModel(LikePost)
    private likePostModel: typeof LikePost,
  ) {}

  async findAllFromPost(
    postId: number,
    reaction: string = '',
  ): Promise<LikePost[]> {
    const condition_post = postId != null ? { postId: postId } : null;
    const condition_react =
      reaction != 'null' && reaction != '' ? { reactionEmoji: reaction } : null;

    return await this.likePostModel.findAll({
      where: {
        [Op.and]: [condition_react, condition_post],
      },
    });
  }

  async findMyReaction(user: User, postId: number): Promise<LikePost> {
    const condition_post = postId != null ? { postId: postId } : null;
    const condition_user = user != null ? { userId: user.id } : null;
    return await this.likePostModel.findOne({
      where: {
        [Op.and]: [condition_post, condition_user],
      },
    });
  }

  async countFromPost(postId: number): Promise<number> {
    return await this.likePostModel.count({ where: { id: postId } });
  }
}
