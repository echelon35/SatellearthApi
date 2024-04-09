import { Post } from 'src/post/post.model';
import { User } from 'src/user/user.model';

export class LikePostDto {
  liked: boolean;
  reactionEmoji: string;
  user: User;
  post: Post;
}
