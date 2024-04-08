import { Controller, Get } from '@nestjs/common';
import { BolideService } from './bolide.service';
import { Bolide } from './bolide.model';

@Controller('bolide')
export class BolideController {
  constructor(private bolideService: BolideService) {}

  @Get()
  async findAll(): Promise<Bolide[]> {
    const bolides = await this.bolideService.findAll();
    return bolides;
  }
}
