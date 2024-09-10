import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EruptionService } from '../Application/Services/eruption.service';
import { Public } from '../Common/decorators/public.decorator';
import { EruptionDto } from '../Domain/DTO/eruption.dto';
import { IEruptionFilter } from '../Domain/Interfaces/IEruptionFilter';

@ApiTags('alea/eruption')
@Controller('alea/eruption')
export class EruptionController {
  constructor(private eruptionService: EruptionService) {}

  @Public()
  @Get()
  async findAndCountAll(
    @Query() query: IEruptionFilter,
  ): Promise<{ rows: EruptionDto[]; count: number }> {
    const eruptions = await this.eruptionService.findAndCountAll(query);
    return eruptions;
  }
}
