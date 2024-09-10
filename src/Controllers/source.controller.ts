import { Controller, Get } from '@nestjs/common';
import { SourceService } from 'src/Application/Services/source.service';
import { SourceDto } from 'src/Domain/DTO/source.dto';

@Controller('source')
export class SourceController {
  constructor(private sourceService: SourceService) {}

  @Get()
  async findAndCountAll(): Promise<{ rows: SourceDto[]; count: number }> {
    const sources = await this.sourceService.findAndCountAll();
    return sources;
  }
}
