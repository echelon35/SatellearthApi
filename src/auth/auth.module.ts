import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,
    RoleModule,
    JwtModule.register({
      global: true,
      secret: process.env.SATELLEARTH_API_SECRET,
      signOptions: { expiresIn: process.env.SATELLEARTH_API_TOKEN_EXPIRATION },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
