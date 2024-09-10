import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BolideService } from 'src/Application/Services/bolide.service';
import { Public } from 'src/Common/decorators/public.decorator';
import { IBolideFilter } from 'src/Domain/Interfaces/IBolideFilter';
import { Bolide } from 'src/Domain/Models/bolide.model';

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
