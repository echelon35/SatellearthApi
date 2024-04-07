import {
  DataType,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  Model,
} from 'sequelize-typescript';
import { User } from 'src/user/user.model';

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
export class UserRoleEntity extends Model {
  @ForeignKey(() => Role)
  @Column(DataType.INTEGER)
  roleId: number;
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;
}
