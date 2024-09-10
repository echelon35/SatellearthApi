import { Geometry } from 'geojson';
import { DataType, Model, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: 'places',
  freezeTableName: true,
})
export class Place extends Model {
  @Column(DataType.STRING(255))
  name: string;

  @Column(DataType.STRING(255))
  label: string;

  @Column(DataType.STRING(255))
  country: string;

  @Column(DataType.STRING(255))
  countryCode: string;

  @Column(DataType.STRING(255))
  providerId: string;

  @Column(DataType.GEOMETRY)
  zone: Geometry;

  @Column(DataType.STRING(255))
  providerPlaceType: string;

  @Column(DataType.BLOB)
  cover: Buffer;
}
