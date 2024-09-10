import { DataType, Model, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: 'sources',
  freezeTableName: true,
})
export class Source extends Model {
  @Column(DataType.STRING)
  adresse: string;

  @Column(DataType.TEXT)
  icone: string;
}
