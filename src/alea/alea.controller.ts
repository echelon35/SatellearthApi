import { Controller, Get, Param } from '@nestjs/common';
import { AleaService } from './alea.service';
import { AleaDto } from './DTO/alea.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';

@ApiTags('aleas')
@Controller('aleas')
export class AleaController {
  constructor(private aleaService: AleaService) {}

  @Public()
  @Get()
  async findAll(): Promise<AleaDto[]> {
    //Renvoie la liste de tous les aléas
    const aleas = await this.aleaService.findAll();
    return aleas;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AleaDto> {
    //Renvoie un aléa par son id
    const alea = await this.aleaService.findOne(id);
    return alea;
  }
}
