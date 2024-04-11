import { UserDto } from 'src/auth/modules/user/DTO/user.dto';
import { PostDto } from '../../post/DTO/post.dto';

export class CommentPostDto {
  user: UserDto;
  post: PostDto;
  comment: string;
}
