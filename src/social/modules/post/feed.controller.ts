import { Controller, Get, Query, Request } from '@nestjs/common';
import { PostService } from './post.service';
import { DisasterService } from 'src/alea/modules/disaster/disaster.service';
import { Public } from 'src/common/decorators/public.decorator';
import { IFeedObject } from './Interfaces/IFeed';
@Controller('feed')
export class FeedController {
  constructor(
    private postService: PostService,
    private disasterService: DisasterService,
  ) {}

  @Get()
  @Public()
  async makeFeed(@Query() query, @Request() req): Promise<IFeedObject[]> {
    //Un feed se compose :
    //-> D'aléas créés par la Terre
    //-> D'actions des amis de l'utilisateurs
    //-> Des posts des utilisateurs

    //Le feed doit proposer prioritairement des évènements récents
    //Ne doit pas reproposer plusieurs fois la même chose
    console.log(req.user);

    const disasters = await this.disasterService.findForFeed(query);
    const allDisasters = await this.disasterService.fromDisasterToAlea(
      disasters,
      'feed',
    );

    let posts;
    if (req.user) {
      posts = await this.postService.findAllForFeedFilteredForUser(req.user);
    } else {
      posts = await this.postService.findAllForPublicFeed();
    }

    const feed = posts.concat(allDisasters);

    return feed;
  }
}
