import {
  DataType,
  Table,
  Model,
  Column,
  Scopes,
  ForeignKey,
} from 'sequelize-typescript';
import { Alea } from 'src/alea/alea.model';
import { User } from 'src/auth/modules/user/user.model';

@Scopes(() => ({
  user: {
    include: [
      {
        model: User,
        as: 'user',
        required: true,
        attributes: ['username,avatar'],
      },
    ],
  },
}))
@Table({
  tableName: 'posts',
  freezeTableName: true,
})
export class Post extends Model {
  @ForeignKey(() => Alea)
  @Column(DataType.INTEGER)
  aleaId: number;
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;
  @Column(DataType.GEOMETRY)
  point: any;
  @Column(DataType.TEXT)
  localisation: string;
  @Column(DataType.ARRAY(DataType.STRING(255)))
  keywords: string[];
  @Column(DataType.ARRAY(DataType.STRING(255)))
  medias: string[];
  @Column(DataType.STRING(500))
  description: string;
  @Column(DataType.BOOLEAN)
  visible: boolean;
  @Column(DataType.TEXT)
  sharedContent: string;
  @Column(DataType.BOOLEAN)
  signal: boolean;
}
