import { Controller, Get, Param } from '@nestjs/common';
import { SeismeDto } from './DTO/seisme.dto';
import { SeismeService } from './seisme.service';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';
import { Seisme } from './seisme.model';

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

  @Public()
  @Get('disaster/:disasterId')
  async findOneByDisaster(
    @Param('disasterId') disasterId: number,
  ): Promise<Seisme> {
    //Renvoie la liste de tous les seismes
    const seismes = await this.seismeService.findOneByDisaster(disasterId);
    return seismes;
  }
}
