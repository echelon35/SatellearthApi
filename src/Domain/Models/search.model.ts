import { DataType, Model, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: 'searches',
  freezeTableName: true,
})
export class Search extends Model {
  @Column(DataType.STRING)
  searchExpression: string;
}
