import { Point } from 'geojson';
import { DataType, Model, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: 'villes',
  freezeTableName: true,
})
export class Ville extends Model {
  @Column(DataType.STRING(255))
  namefr: string;

  @Column(DataType.DOUBLE)
  longitude: number;

  @Column(DataType.DOUBLE)
  latitude: number;

  @Column(DataType.INTEGER)
  population: number;

  @Column(DataType.STRING(40))
  timezone: string;

  @Column(DataType.TEXT)
  altitude: string;

  @Column(DataType.GEOMETRY)
  geom: Point;
}
