import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BolideService } from '../Application/Services/bolide.service';
import { Public } from '../Commons/Decorators/public.decorator';
import { IBolideFilter } from '../Domain/Interfaces/IBolideFilter';
import { Bolide } from '../Domain/Models/bolide.model';

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
