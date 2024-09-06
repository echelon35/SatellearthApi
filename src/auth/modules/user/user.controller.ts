import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Request,
  Response,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './DTO/user.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { PostService } from 'src/social/modules/post/post.service';
import { FollowerService } from 'src/social/modules/follower/follower.service';

@Controller()
export class UserController {
  constructor(
    private userService: UserService,
    private postService: PostService,
    private followerService: FollowerService,
  ) {}

  @Get('users')
  async findAll(): Promise<UserDto[]> {
    const users = await this.userService.findAll();
    return users;
  }

  @Get('profile')
  async findMe(@Request() req): Promise<UserDto> {
    if (req.user != null) {
      const me = await this.userService.findMe(req?.user?.id);
      return me;
    } else {
      throw new NotFoundException();
    }
  }

  @Public()
  @Get('user/picture/:userId')
  async getPicture(@Param() params, @Response() res) {
    if (params.userId != null) {
      const picture = await this.userService.getPicture(
        parseInt(params.userId),
      );
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

  @Get('profile/stats/posts')
  async countMyPosts(@Request() req): Promise<number> {
    if (req.user != null) {
      const myPostsNb = await this.postService.countUserPosts(
        parseInt(req.user.id),
      );
      return myPostsNb;
    } else {
      throw new NotFoundException();
    }
  }

  @Public()
  @Get('user/:userId/stats/posts')
  async countUserPosts(@Param() params): Promise<number> {
    if (params.userId != null) {
      const userPostsNb = await this.postService.countUserPosts(
        parseInt(params.userId),
      );
      return userPostsNb;
    } else {
      throw new NotFoundException();
    }
  }

  @Get('profile/stats/followers')
  async countMyFollowers(@Request() req): Promise<number> {
    if (req.user != null) {
      const myFollowersNb = await this.followerService.countUserFollowers(
        parseInt(req.user.id),
      );
      return myFollowersNb;
    } else {
      throw new NotFoundException();
    }
  }

  @Public()
  @Get('user/:userId/stats/followers')
  async countUserFollowers(@Param() params): Promise<number> {
    if (params.userId != null) {
      const followersNb = await this.followerService.countUserFollowers(
        parseInt(params.userId),
      );
      return followersNb;
    } else {
      throw new NotFoundException();
    }
  }

  @Get('profile/stats/subscriptions')
  async countMySubscriptions(@Request() req): Promise<number> {
    if (req.user != null) {
      const mySubscriptionsNb =
        await this.followerService.countUserSubscriptions(
          parseInt(req.user.id),
        );
      return mySubscriptionsNb;
    } else {
      throw new NotFoundException();
    }
  }

  @Public()
  @Get('user/:userId/stats/subscriptions')
  async countUserSubscriptions(@Param() params): Promise<number> {
    if (params.userId != null) {
      const subscriptionsNb = await this.followerService.countUserSubscriptions(
        parseInt(params.userId),
      );
      return subscriptionsNb;
    } else {
      throw new NotFoundException();
    }
  }
}
