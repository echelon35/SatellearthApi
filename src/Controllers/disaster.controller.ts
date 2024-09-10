import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DisasterService } from '../Application/Services/disaster.service';
import { Public } from '../Common/decorators/public.decorator';
import { DisasterDto } from '../Domain/DTO/disaster.dto';
import { IDisasterFilter } from '../Domain/Interfaces/IDisasterFilter';

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
