import { Controller, Get, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { DisasterService } from 'src/alea/modules/disaster/disaster.service';
import { Public } from 'src/common/decorators/public.decorator';
@Controller('feed')
export class FeedController {
  constructor(
    private postService: PostService,
    private disasterService: DisasterService,
  ) {}

  @Get()
  @Public()
  async makeFeed(@Query() query): Promise<any> {
    //Un feed se compose :
    //-> D'aléas créés par la Terre
    //-> D'actions des amis de l'utilisateurs
    //-> Des posts des utilisateurs

    //Le feed doit proposer prioritairement des évènements récents
    //Ne doit pas reproposer plusieurs fois la même chose

    const disasters = await this.disasterService.findForFeed(query);
    const allDisasters =
      await this.disasterService.fromDisasterToAlea(disasters);

    return allDisasters;
  }
}
