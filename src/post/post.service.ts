import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.model';
import { PostDto } from './DTO/post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post)
    private postModel: typeof Post,
  ) {}

  async findAll(): Promise<PostDto[]> {
    const posts = await this.postModel.findAll();
    return posts;
  }
}
