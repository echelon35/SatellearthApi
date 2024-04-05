import { DataType, Model, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: 'advice',
  freezeTableName: true,
})
export class AdviceEntity extends Model {
  @Column(DataType.STRING(255))
  mail: string;
  @Column(DataType.TEXT)
  advice: string;
}
