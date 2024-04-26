import { Geometry } from 'geojson';
import { DataType, Model, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: 'saved_searches',
  freezeTableName: true,
})
export class SavedSearch extends Model {
  @Column(DataType.STRING(255))
  name: string;
  @Column(DataType.TEXT)
  description: string;
  @Column(DataType.GEOMETRY)
  zone: Geometry;
  @Column(DataType.CHAR)
  periodType: string;
  @Column(DataType.ARRAY(DataType.STRING))
  aleaList: string[];
  @Column(DataType.INTEGER)
  userId: number;
}
