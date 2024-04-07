import { Injectable } from '@nestjs/common';
import { Tweet } from './tweet.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TweetService {
  constructor(
    @InjectModel(Tweet)
    private tweetModel: typeof Tweet,
  ) {}

  async findAll(): Promise<Tweet[]> {
    return this.tweetModel.findAll();
  }
}
