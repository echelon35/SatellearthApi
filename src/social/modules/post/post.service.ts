import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.model';
import { PostDto } from './DTO/post.dto';
import { User } from 'src/auth/modules/user/user.model';
import { Op } from 'sequelize';
import { BlockUserService } from '../block-user/block-user.service';
import { IFeedObject } from './Interfaces/IFeed';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post)
    private postModel: typeof Post,
    private blockUserService: BlockUserService,
  ) {}

  async findAll(): Promise<PostDto[]> {
    const posts = await this.postModel.findAll();
    return posts;
  }

  async findAllForFeedFilteredForUser(user: User): Promise<IFeedObject[]> {
    const invisibleUsers = await this.blockUserService.blockedAndBloker(
      user.id,
    );
    let invisibleUsersId = Array.from(invisibleUsers, (blocked) =>
      blocked.userId === user.id ? blocked.userId : blocked.blockedId,
    );
    invisibleUsersId = [...new Set(invisibleUsersId)];
    const posts = await this.postModel.scope('user').findAll({
      include: [
        {
          model: User,
          required: true,
          attributes: ['id', 'username', 'avatar'],
          where: {
            id: {
              [Op.notIn]: invisibleUsersId,
            },
          },
        },
      ],
    });
    const postsFeed = posts.map((item) => ({
      type: 'post',
      content: item,
    }));
    return postsFeed;
  }

  async findAllForPublicFeed(): Promise<IFeedObject[]> {
    const posts = await this.postModel.scope('user').findAll();
    const postsFeed = posts.map((item) => ({
      type: 'post',
      content: item,
    }));
    return postsFeed;
  }
}
