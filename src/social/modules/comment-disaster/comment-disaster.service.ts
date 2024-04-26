import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CommentDisaster } from './comment-disaster.model';

@Injectable()
export class CommentDisasterService {
  constructor(
    @InjectModel(CommentDisaster)
    private commentDisaster: typeof CommentDisaster,
  ) {}

  async findAll(): Promise<CommentDisaster[]> {
    return await this.commentDisaster.findAll();
  }
}
