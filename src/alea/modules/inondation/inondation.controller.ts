import { Controller, Get } from '@nestjs/common';
import { InondationService } from './inondation.service';
import { InondationDto } from './DTO/inondation.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';

@ApiTags('alea/inondation')
@Controller('alea/inondation')
export class InondationController {
  constructor(private inondationService: InondationService) {}

  @Public()
  @Get()
  async findAll(): Promise<{ rows: InondationDto[]; count: number }> {
    const inondations = await this.inondationService.findAndCountAll();
    return inondations;
  }
}
