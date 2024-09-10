import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CommentPost } from '../../Domain/Models/comment-post.model';

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
