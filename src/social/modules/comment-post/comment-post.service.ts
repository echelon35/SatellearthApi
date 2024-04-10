import { Injectable } from '@nestjs/common';
import { CommentPost } from './comment-post.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CommentPostService {
  constructor(
    @InjectModel(CommentPost)
    private commentPostModel: typeof CommentPost,
  ) {}

  async findAll(): Promise<CommentPost[]> {
    return this.commentPostModel.findAll();
  }
}
