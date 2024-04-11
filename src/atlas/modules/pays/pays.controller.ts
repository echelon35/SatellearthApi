import { Controller, Get } from '@nestjs/common';
import { PaysDto } from './pays.dto';
import { PaysService } from './pays.service';
import { Public } from 'src/decorators/public.decorator';

@Controller('pays')
export class PaysController {
  constructor(private paysService: PaysService) {}

  @Public()
  @Get()
  async findAll(): Promise<PaysDto[]> {
    //Renvoie la liste de tous les aléas
    const pays = await this.paysService.findAll();
    return pays;
  }
}
