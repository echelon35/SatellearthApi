import { Controller, Get } from '@nestjs/common';
import { CycloneService } from './cyclone.service';
import { CycloneDto } from './DTO/cyclone.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('alea/cyclone')
@Controller('alea/cyclone')
export class CycloneController {
  constructor(private cycloneService: CycloneService) {}

  @Get()
  async findAll(): Promise<CycloneDto[]> {
    const cyclones = await this.cycloneService.findAll();
    return cyclones;
  }
}
