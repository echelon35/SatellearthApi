import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InondationService } from 'src/Application/Services/inondation.service';
import { Public } from 'src/Common/decorators/public.decorator';
import { InondationDto } from 'src/Domain/DTO/inondation.dto';

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
