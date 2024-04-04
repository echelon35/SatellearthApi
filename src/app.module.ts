import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AleaController } from './alea/alea.controller';
import { AleaModule } from './alea/alea.module';

@Module({
  imports: [AleaModule],
  controllers: [AppController, AleaController],
  providers: [AppService],
})
export class AppModule {}
