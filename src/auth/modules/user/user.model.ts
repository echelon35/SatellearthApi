import {
  DataType,
  Model,
  Table,
  Column,
  Unique,
  Index,
  Scopes,
  BelongsToMany,
  DefaultScope,
} from 'sequelize-typescript';
import { BlockUser } from 'src/social/modules/block-user/block-user.model';
import { Role, UserRole } from '../role/role.model';

@DefaultScope(() => ({
  attributes: [
    'id',
    'firstname',
    'lastname',
    'username',
    'mail',
    'register_date',
    'birthdate',
    'phone',
    'biography',
    'facebook_link',
    'youtube_link',
    'instagram_link',
    'twitch_link',
    'public_coordinates',
  ],
}))
@Scopes(() => ({
  picture: {
    attributes: ['avatar'],
  },
  role: {
    attributes: ['username'],
    include: [Role],
  },
  login: {
    attributes: ['mail', 'username', 'password', 'id'],
  },
  my_profil: {
    attributes: [
      'id',
      'username',
      'firstname',
      'lastname',
      'mail',
      'register_date',
      'birthdate',
      'phone',
      'avatar',
      'biography',
      'facebook_link',
      'youtube_link',
      'instagram_link',
      'twitch_link',
      'public_coordinates',
    ],
  },
  profil_private: {
    attributes: [
      'firstname',
      'lastname',
      'mail',
      'register_date',
      'birthdate',
      'phone',
      'avatar',
      'biography',
      'facebook_link',
      'youtube_link',
      'instagram_link',
      'twitch_link',
      'public_coordinates',
    ],
  },
}))
@Table({
  tableName: 'users',
  freezeTableName: true,
})
export class User extends Model {
  @Column(DataType.STRING(255))
  firstname: string;
  @Column(DataType.STRING(255))
  password: string;
  @Column(DataType.TEXT)
  biography: string;
  @Column(DataType.STRING(255))
  facebook_link: string;
  @Column(DataType.STRING(255))
  youtube_link: string;
  @Column(DataType.STRING(255))
  twitter_link: string;
  @Column(DataType.STRING(255))
  instagram_link: string;
  @Column(DataType.STRING(255))
  twitch_link: string;
  @Column(DataType.STRING(255))
  linkedin_link: string;
  @Column(DataType.STRING(255))
  lastname: string;
  @Unique
  @Column(DataType.STRING(255))
  mail: string;
  @Unique
  @Index
  @Column(DataType.STRING(255))
  username: string;
  @Column(DataType.STRING(255))
  source: string;
  @Column(DataType.BOOLEAN)
  verify: boolean;
  @Column(DataType.DATE)
  register_date: Date;
  @Column(DataType.DATE)
  last_connexion: Date;
  @Column(DataType.DATE)
  birthdate: Date;
  @Column(DataType.STRING(14))
  phone: string;
  @Unique
  @Column(DataType.TEXT)
  google_id: string;
  @Column(DataType.TEXT)
  avatar: string;
  @Column(DataType.BOOLEAN)
  public_coordinates: boolean;

  @BelongsToMany(() => User, () => BlockUser)
  block_users: BlockUser[];
  @BelongsToMany(() => User, () => BlockUser)
  blocked_by_users: BlockUser[];
  @BelongsToMany(() => User, () => UserRole)
  roles: UserRole[];
}
