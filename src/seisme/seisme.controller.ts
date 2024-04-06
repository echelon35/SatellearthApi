import { Controller, Get } from '@nestjs/common';
import { SeismeDto } from './DTO/seisme.dto';
import { SeismeService } from './seisme.service';

@Controller('seisme')
export class SeismeController {
  constructor(private seismeService: SeismeService) {}

  @Get()
  async findAll(): Promise<SeismeDto[]> {
    //Renvoie la liste de tous les seismes
    const seismes = await this.seismeService.findAll();
    return seismes;
  }
}
