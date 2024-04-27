import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from './post.model';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { FeedController } from './feed.controller';
import { DisasterModule } from 'src/alea/modules/disaster/disaster.module';
import { BlockUserModule } from '../block-user/block-user.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Post]),
    DisasterModule,
    BlockUserModule,
  ],
  providers: [PostService],
  controllers: [PostController, FeedController],
  exports: [PostService],
})
export class PostModule {}
