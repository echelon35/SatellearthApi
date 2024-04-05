import { DataType, Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'bolides',
})
export class Bolide extends Model {
  @Column(DataType.DOUBLE)
  vitesse: number;

  @Column(DataType.DOUBLE)
  energie: number;

  @Column(DataType.DOUBLE)
  energie_impact: number;

  @Column(DataType.DOUBLE)
  altitude: number;
}
