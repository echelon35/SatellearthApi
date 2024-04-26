import { Module } from '@nestjs/common';
import { BlockUserService } from './block-user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlockUser } from './block-user.model';
import { BlockUserController } from './block-user.controller';

@Module({
  providers: [BlockUserService],
  imports: [SequelizeModule.forFeature([BlockUser])],
  controllers: [BlockUserController],
  exports: [BlockUserService],
})
export class BlockUserModule {}
