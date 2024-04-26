import {
  DataType,
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../user/user.model';

@Table({
  tableName: 'roles',
  freezeTableName: true,
})
export class Role extends Model {
  @Column(DataType.STRING)
  name: string;
}

/**
 * MANY TO MANY association between role and users
 */
@Table({
  tableName: 'user_roles',
  freezeTableName: true,
})
export class UserRole extends Model {
  @ForeignKey(() => Role)
  @Column(DataType.INTEGER)
  roleId: number;
  @BelongsTo(() => Role, 'roleId')
  role: Role;
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;
  @BelongsTo(() => User, 'userId')
  user: User;
}
