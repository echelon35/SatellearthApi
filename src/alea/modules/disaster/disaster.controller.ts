import { Controller, Get } from '@nestjs/common';
import { DisasterService } from './disaster.service';
import { DisasterDto } from './DTO/disaster.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('alea/disaster')
@Controller('alea/disaster')
export class DisasterController {
  constructor(private disasterService: DisasterService) {}

  @Get()
  async findAll(): Promise<DisasterDto[]> {
    const disasters = await this.disasterService.findAll();
    return disasters;
  }
}
