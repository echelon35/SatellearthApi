import { Controller, Get } from '@nestjs/common';
import { EruptionDto } from './DTO/eruption.dto';
import { EruptionService } from './eruption.service';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';

@ApiTags('alea/eruption')
@Controller('alea/eruption')
export class EruptionController {
  constructor(private eruptionService: EruptionService) {}

  @Public()
  @Get()
  async findAndCountAll(): Promise<{ rows: EruptionDto[]; count: number }> {
    const eruptions = await this.eruptionService.findAndCountAll();
    return eruptions;
  }
}
