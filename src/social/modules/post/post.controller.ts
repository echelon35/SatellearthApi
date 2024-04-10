import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './DTO/post.dto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async findAll(): Promise<PostDto[]> {
    const posts = await this.postService.findAll();
    return posts;
  }
}
