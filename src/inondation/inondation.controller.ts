import { Controller, Get } from '@nestjs/common';
import { InondationService } from './inondation.service';
import { InondationDto } from './DTO/inondation.dto';

@Controller('inondation')
export class InondationController {
  constructor(private inondationService: InondationService) {}

  @Get()
  async findAll(): Promise<InondationDto[]> {
    const inondations = await this.inondationService.findAll();
    return inondations;
  }
}
