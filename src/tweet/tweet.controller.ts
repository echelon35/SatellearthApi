import { Controller, Get } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetDto } from './DTO/tweet.dto';

@Controller('tweet')
export class TweetController {
  constructor(private tweetService: TweetService) {}

  @Get()
  async findAll(): Promise<TweetDto[]> {
    const tweets = await this.tweetService.findAll();
    return tweets;
  }
}
