import {
  DataType,
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
  DefaultScope,
} from 'sequelize-typescript';
import { Disaster } from 'src/disaster/disaster.model';
import { User } from 'src/user/user.model';

@DefaultScope(() => ({
  include: [
    { model: Disaster, as: 'disaster' },
    { model: User, as: 'user' },
  ],
}))
@Table({
  tableName: 'disaster_comments',
  freezeTableName: true,
})
export class CommentDisaster extends Model {
  @ForeignKey(() => Disaster)
  @Column(DataType.INTEGER)
  disasterId: number;
  @BelongsTo(() => Disaster, 'disasterId')
  disaster: Disaster;
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;
  @BelongsTo(() => User, 'userId')
  user: User;
  @Column(DataType.TEXT)
  comment: string;
}
