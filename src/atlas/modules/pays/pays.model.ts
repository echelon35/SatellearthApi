import { DataType, Model, Table, Column } from 'sequelize-typescript';
import { Geometry } from 'geojson';

@Table({
  tableName: 'pays',
  freezeTableName: true,
})
export class PaysEntity extends Model {
  @Column(DataType.STRING(255))
  namefr: string;
  @Column(DataType.STRING(255))
  nameus: string;
  @Column(DataType.STRING(3))
  trigramme: string;
  @Column(DataType.STRING(2))
  iso3166_2: string;
  @Column(DataType.STRING(255))
  continent: string;
  @Column(DataType.DOUBLE)
  population: number;
  @Column(DataType.DOUBLE)
  superficie: number;
  @Column(DataType.GEOMETRY)
  geom: Geometry;
  @Column(DataType.STRING(255))
  wikilink: string;
  @Column(DataType.TEXT)
  geojson: string;
}
