import { DataType, Model, Column, Table } from 'sequelize-typescript';

@Table({
  tableName: 'place_types',
  freezeTableName: true,
})
export class PlaceType extends Model {
  @Column(DataType.STRING(255))
  name: string;
  @Column(DataType.STRING(255))
  label: string;
  @Column(DataType.BLOB)
  cover: Buffer;
}
