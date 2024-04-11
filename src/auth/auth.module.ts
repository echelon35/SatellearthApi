import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { JwtModule } from '@nestjs/jwt';
import { auth_secret } from 'config/auth.config';

@Module({
  imports: [
    UserModule,
    RoleModule,
    JwtModule.register({
      global: true,
      secret: auth_secret.secret,
      signOptions: { expiresIn: auth_secret.token_expiration },
    }),
  ],
})
export class AuthModule {}
