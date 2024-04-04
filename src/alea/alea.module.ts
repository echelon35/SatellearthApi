import { Module } from '@nestjs/common';
import { AleaService } from './alea.service';

@Module({
  providers: [AleaService],
})
export class AleaModule {}
