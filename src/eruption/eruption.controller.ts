import { Controller, Get } from '@nestjs/common';
import { EruptionDto } from './DTO/eruption.dto';
import { EruptionService } from './eruption.service';

@Controller('eruption')
export class EruptionController {
  constructor(private eruptionService: EruptionService) {}

  @Get()
  async findAll(): Promise<EruptionDto[]> {
    const eruptions = await this.eruptionService.findAll();
    return eruptions;
  }
}
