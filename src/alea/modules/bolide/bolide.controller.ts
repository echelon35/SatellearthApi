import { Controller, Get, Query } from '@nestjs/common';
import { BolideService } from './bolide.service';
import { Bolide } from './bolide.model';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';
import { IBolideFilter } from './Interfaces/IBolideFilter';

@ApiTags('alea/bolide')
@Controller('alea/bolide')
export class BolideController {
  constructor(private bolideService: BolideService) {}

  @Public()
  @Get()
  async findAndCountAll(
    @Query() query: IBolideFilter,
  ): Promise<{ rows: Bolide[]; count: number }> {
    const bolides = await this.bolideService.findAndCountAll(query);
    return bolides;
  }
}
