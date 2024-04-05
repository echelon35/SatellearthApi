import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'post_comment',
})
export class CommentPost extends Model {
  @Column(DataType.INTEGER)
  postId: number;
  @Column(DataType.INTEGER)
  userId: number;
  @Column(DataType.TEXT)
  comment: string;
}
