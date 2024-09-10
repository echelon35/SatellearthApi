import { PostDto } from './post.dto';
import { UserDto } from './user.dto';

export class CommentPostDto {
  user: UserDto;
  post: PostDto;
  comment: string;
}
