import { DataType, Model, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: 'disaster_comment',
})
export class CommentDisaster extends Model {
  @Column(DataType.INTEGER)
  disasterId: number;
  @Column(DataType.INTEGER)
  userId: number;
  @Column(DataType.TEXT)
  comment: string;
}
