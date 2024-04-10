import { Controller, Get } from '@nestjs/common';
import { CommentDisasterService } from './comment-disaster.service';
import { CommentDisaster } from './comment-disaster.model';

@Controller('comment-disaster')
export class CommentDisasterController {
  constructor(private commentDisasterService: CommentDisasterService) {}

  @Get()
  async findAll(): Promise<CommentDisaster[]> {
    const commentDisasters = await this.commentDisasterService.findAll();
    return commentDisasters;
  }
}
