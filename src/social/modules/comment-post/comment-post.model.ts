import {
  BelongsTo,
  Column,
  DataType,
  DefaultScope,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Post } from '../post/post.model';
import { User } from 'src/auth/modules/user/user.model';

@DefaultScope(() => ({
  include: [
    { model: Post, as: 'post' },
    { model: User, as: 'user' },
  ],
}))
@Table({
  tableName: 'post_comments',
  freezeTableName: true,
})
export class CommentPost extends Model {
  @ForeignKey(() => Post)
  @Column(DataType.INTEGER)
  postId: number;
  @BelongsTo(() => Post, 'postId')
  post: Post;
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;
  @BelongsTo(() => User, 'userId')
  user: User;
  @Column(DataType.TEXT)
  comment: string;
}
