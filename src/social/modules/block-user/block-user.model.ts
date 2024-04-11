import {
  DataType,
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DefaultScope,
} from 'sequelize-typescript';
import { User } from 'src/auth/modules/user/user.model';

@DefaultScope(() => ({
  include: [
    { model: User, as: 'user' },
    { model: User, as: 'blockedUser' },
  ],
}))
@Table({
  tableName: 'block_users',
  freezeTableName: true,
})
export class BlockUser extends Model {
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;
  @BelongsTo(() => User, 'userId')
  user: User;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  blockedId: number;
  @BelongsTo(() => User, 'blockedId')
  blockedUser: User;
}
