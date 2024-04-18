import { Controller, Get } from '@nestjs/common';
import { SeismeDto } from './DTO/seisme.dto';
import { SeismeService } from './seisme.service';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';

@ApiTags('alea/seisme')
@Controller('alea/seisme')
export class SeismeController {
  constructor(private seismeService: SeismeService) {}

  @Public()
  @Get()
  async findAndCountAll(): Promise<{ rows: SeismeDto[]; count: number }> {
    //Renvoie la liste de tous les seismes
    const seismes = await this.seismeService.findAndCountAll();
    return seismes;
  }
}
