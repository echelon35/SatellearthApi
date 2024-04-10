import { PostDto } from 'src/post/DTO/post.dto';
import { UserDto } from 'src/user/DTO/user.dto';

export class CommentPostDto {
  user: UserDto;
  post: PostDto;
  comment: string;
}
