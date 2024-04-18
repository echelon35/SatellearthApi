import { Controller, Get } from '@nestjs/common';
import { BolideService } from './bolide.service';
import { Bolide } from './bolide.model';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';

@ApiTags('alea/bolide')
@Controller('alea/bolide')
export class BolideController {
  constructor(private bolideService: BolideService) {}

  @Public()
  @Get()
  async findAndCountAll(): Promise<{ rows: Bolide[]; count: number }> {
    const bolides = await this.bolideService.findAndCountAll();
    return bolides;
  }
}
