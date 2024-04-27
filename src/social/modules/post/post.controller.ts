import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Response,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './DTO/post.dto';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async findAll(): Promise<PostDto[]> {
    const posts = await this.postService.findAll();
    return posts;
  }

  @Public()
  @Get('/picture/:id')
  async findPicture(@Param() params, @Response() res): Promise<string> {
    if (params.id != null) {
      const picture = await this.postService.findPicture(parseInt(params.id));
      if (picture != null) {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        return res.end(picture);
      } else {
        throw new NotFoundException();
      }
    } else {
      throw new NotFoundException();
    }
  }
}
