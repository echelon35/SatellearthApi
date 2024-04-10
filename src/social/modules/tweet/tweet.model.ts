import { DataType, Model, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: 'tweets',
  freezeTableName: true,
})
export class Tweet extends Model {
  @Column(DataType.STRING(255))
  tweet_id: string;

  @Column(DataType.STRING)
  contenu: string;

  @Column(DataType.STRING)
  geojson: string;

  @Column(DataType.DATE)
  created: Date;

  @Column(DataType.STRING(255))
  author: string;

  @Column(DataType.ARRAY(DataType.TEXT))
  hashtags: string[];

  @Column(DataType.ARRAY(DataType.TEXT))
  lien: string[];
}
