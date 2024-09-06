import { Controller, Get, Query } from '@nestjs/common';
import { CycloneService } from './cyclone.service';
import { CycloneDto } from './DTO/cyclone.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';
import { ICycloneFilter } from './Interfaces/ICycloneFilter';

@ApiTags('alea/cyclone')
@Controller('alea/cyclone')
export class CycloneController {
  constructor(private cycloneService: CycloneService) {}

  @Public()
  @Get()
  async findAndCountAll(
    @Query() query: ICycloneFilter,
  ): Promise<{ rows: CycloneDto[]; count: number }> {
    const cyclones = await this.cycloneService.findAndCountAll(query);
    return cyclones;
  }
}
