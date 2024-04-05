import { DataType, Model, Column, Table } from 'sequelize-typescript';

@Table({
  tableName: 'followers',
  freezeTableName: true,
})
export class FollowerEntity extends Model {
  @Column(DataType.INTEGER)
  userId: number;
  @Column(DataType.INTEGER)
  followerId: number;
}
