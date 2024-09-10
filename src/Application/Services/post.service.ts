import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { promises as fs } from 'fs';
import { uploadFolder } from '../../Common/constants/allPaths';
import { PostDto } from '../../Domain/DTO/post.dto';
import { IFeedObject } from '../../Domain/Interfaces/IFeed';
import { User } from '../../Domain/Models/user.model';
import { BlockUserService } from './block-user.service';
import { Post } from '../../Domain/Models/post.model';

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

  async findPicture(postId: number): Promise<Buffer> {
    const post = await this.postModel.findByPk(postId);
    if (post?.medias[0] != null) {
      const picture = await fs.readFile(uploadFolder + post.medias[0]);
      return picture;
    } else {
      return null;
    }
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

  async countUserPosts(userId: number): Promise<number> {
    return await this.postModel.count({ where: { userId: userId } });
  }
}
