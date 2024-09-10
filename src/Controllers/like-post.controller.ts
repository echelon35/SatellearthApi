import { Controller, Get, Param, Query, Request } from '@nestjs/common';
import { LikePostService } from '../Application/Services/like-post.service';
import { Public } from '../Common/decorators/public.decorator';
import { LikePostDto } from '../Domain/DTO/like-post.dto';

@Controller('post')
export class LikePostController {
  constructor(private likePostService: LikePostService) {}

  @Public()
  @Get('like/:id')
  async myLike(@Param() params, @Request() req): Promise<LikePostDto> {
    if (req.user != null && params.id != null) {
      return await this.likePostService.findMyReaction(
        req.user,
        parseInt(params.id),
      );
    } else {
      return null;
    }
  }

  @Public()
  @Get('likes/:id')
  async findAll(@Param() params, @Query() query): Promise<LikePostDto[]> {
    const reaction = query.reaction != null ? query.reaction : '';
    const likePosts = params.id
      ? await this.likePostService.findAllFromPost(
          parseInt(params.id),
          reaction,
        )
      : [];
    return likePosts;
  }

  @Public()
  @Get('likes/count/:id')
  async countAll(@Param() params): Promise<number> {
    const postId = params.id;
    const nbLikes = await this.likePostService.countFromPost(postId);
    return nbLikes;
  }
}
