import { Controller, Get } from '@nestjs/common';
import { PaysService } from '../Application/Services/pays.service';
import { Public } from '../Commons/Decorators/public.decorator';
import { PaysDto } from '../Domain/DTO/pays.dto';

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
