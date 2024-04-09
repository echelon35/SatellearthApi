import { Controller, Get } from '@nestjs/common';
import { LikePostService } from './like-post.service';
import { LikePostDto } from './DTO/like-post.dto';

@Controller('like-post')
export class LikePostController {
  constructor(private likePostService: LikePostService) {}

  @Get()
  async findAll(): Promise<LikePostDto[]> {
    const likePosts = await this.likePostService.findAll();
    return likePosts;
  }
}
