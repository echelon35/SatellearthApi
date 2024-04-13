import { Controller, Get, Query } from '@nestjs/common';
import { DisasterService } from './disaster.service';
import { DisasterDto } from './DTO/disaster.dto';
import { ApiTags } from '@nestjs/swagger';
import { IDisasterFilter } from './Interfaces/IDisasterFilter';
import { Public } from 'src/decorators/public.decorator';

@ApiTags('alea/disaster')
@Controller('alea/disaster')
export class DisasterController {
  constructor(private disasterService: DisasterService) {}

  @Public()
  @Get()
  async findAll(@Query() query: IDisasterFilter): Promise<DisasterDto[]> {
    console.log(query);
    const disasters = await this.disasterService.findAll(query);
    return disasters;
  }
}
