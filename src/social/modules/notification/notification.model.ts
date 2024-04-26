import { DataType, Model, Table, Column, Default } from 'sequelize-typescript';

@Table({
  tableName: 'notifications',
  freezeTableName: true,
})
export class Notification extends Model {
  @Column(DataType.INTEGER)
  userId: number;
  @Column(DataType.ENUM({ values: ['USER', 'POST', 'DISASTER', 'COMMENT'] }))
  linkType: string;
  @Column(DataType.INTEGER)
  linkId: number;
  @Column(DataType.STRING(255))
  message: string;
  @Default(false)
  @Column(DataType.BOOLEAN)
  consulted: boolean;
}
