import { Controller, Get, Query, Request } from '@nestjs/common';
import { DisasterService } from '../Application/Services/disaster.service';
import { PostService } from '../Application/Services/post.service';
import { Public } from '../Commons/Decorators/public.decorator';
import { shuffle } from '../Commons/Helpers/ShuffleArray';
import { IFeedObject } from '../Domain/Interfaces/IFeed';
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

    const disasters = await this.disasterService.findForFeed(query);
    const allDisasters = await this.disasterService.fromDisasterToAlea(
      disasters,
      'feed',
    );

    let posts: IFeedObject[];
    if (req.user) {
      posts = await this.postService.findAllForFeedFilteredForUser(req.user);
    } else {
      posts = await this.postService.findAllForPublicFeed();
    }

    const feed = posts.concat(allDisasters);

    //Shuffle the array
    const shuffle_feed = shuffle(feed);

    return shuffle_feed;
  }
}
