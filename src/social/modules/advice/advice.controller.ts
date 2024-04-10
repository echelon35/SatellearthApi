import { Controller, Get } from '@nestjs/common';
import { AdviceService } from './advice.service';
import { AdviceDto } from './DTO/advice.dto';

@Controller('advice')
export class AdviceController {
  constructor(private adviceService: AdviceService) {}

  @Get()
  async findAll(): Promise<AdviceDto[]> {
    const advices = await this.adviceService.findAll();
    return advices;
  }
}
