import { Controller, Get } from '@nestjs/common';
import { BolideService } from './bolide.service';
import { Bolide } from './bolide.model';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';

@ApiTags('alea/bolide')
@Controller('alea/bolide')
export class BolideController {
  constructor(private bolideService: BolideService) {}

  @Public()
  @Get()
  async findAll(): Promise<Bolide[]> {
    const bolides = await this.bolideService.findAll();
    return bolides;
  }
}
