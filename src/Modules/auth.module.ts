import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './user.module';
import { GoogleStrategy } from 'src/Strategy/google.strategy';
import { AuthService } from 'src/Application/Services/auth.service';
import { AuthController } from 'src/Controllers/auth.controller';
import { LocalStrategy } from 'src/Strategy/local.strategy';
import { JwtStrategy } from 'src/Strategy/jwt.strategy';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: 'disaster-secret-key',
      signOptions: { expiresIn: 604800 },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, GoogleStrategy],
})
export class AuthModule {}
