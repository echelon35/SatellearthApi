import { Controller, Get, Query } from '@nestjs/common';
import { DisasterService } from './disaster.service';
import { DisasterDto } from './DTO/disaster.dto';
import { ApiTags } from '@nestjs/swagger';
import { IDisasterFilter } from './Interfaces/IDisasterFilter';
import { Public } from 'src/common/decorators/public.decorator';

@ApiTags('disasters')
@Controller('disasters')
export class DisasterController {
  constructor(private disasterService: DisasterService) {}

  @Public()
  @Get()
  async findAndCountAll(
    @Query() query: IDisasterFilter,
  ): Promise<{ rows: DisasterDto[]; count: number }> {
    //console.log(query);
    const disasters = await this.disasterService.findAndCountAll(query);
    return disasters;
  }

  @Public()
  @Get('/count')
  async count(@Query() query: IDisasterFilter): Promise<number> {
    //console.log(query);
    const disasters_count = await this.disasterService.count(query);
    return disasters_count;
  }
}
