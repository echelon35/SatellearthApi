import {
  DataType,
  Model,
  Table,
  Column,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'sources',
  freezeTableName: true,
})
export class Source extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  id: string;

  @Column(DataType.STRING)
  adresse: string;

  @Column(DataType.TEXT)
  icone: string;
}
