import { Controller, Get, Param } from '@nestjs/common';
import { DisasterService } from './disaster.service';
import { DisasterDto } from './DTO/disaster.dto';
import { ApiTags } from '@nestjs/swagger';
import { IDisasterFilter } from './Interfaces/IDisasterFilter';

@ApiTags('alea/disaster')
@Controller('alea/disaster')
export class DisasterController {
  constructor(private disasterService: DisasterService) {}

  @Get()
  async findAll(@Param() params: IDisasterFilter): Promise<DisasterDto[]> {
    const disasters = await this.disasterService.findAll(params);
    return disasters;
  }
}
