import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'aleas',
  freezeTableName: true,
  timestamps: false,
})
export class Alea extends Model {
  @Column(DataType.STRING(255))
  name: string;

  @Column(DataType.STRING(255))
  legend: string;

  @Column({ defaultValue: true })
  disponible: boolean;

  @Column(DataType.ARRAY(DataType.STRING))
  keywords: string[];
}
