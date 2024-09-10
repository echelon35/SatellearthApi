import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CycloneService } from '../Application/Services/cyclone.service';
import { Public } from '../Common/decorators/public.decorator';
import { CycloneDto } from '../Domain/DTO/cyclone.dto';
import { ICycloneFilter } from '../Domain/Interfaces/ICycloneFilter';

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
