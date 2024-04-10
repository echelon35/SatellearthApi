import { Controller, Get } from '@nestjs/common';
import { CommentPostService } from './comment-post.service';
import { CommentPostDto } from './DTO/comment-post.dto';

@Controller('comment-post')
export class CommentPostController {
  constructor(private commentPostService: CommentPostService) {}

  @Get()
  async findAll(): Promise<CommentPostDto[]> {
    const commentPost = await this.commentPostService.findAll();
    return commentPost;
  }
}
