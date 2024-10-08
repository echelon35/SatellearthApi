import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SeismeService } from '../Application/Services/seisme.service';
import { Public } from '../Commons/Decorators/public.decorator';
import { SeismeDto } from '../Domain/DTO/seisme.dto';
import { ISeismeFilter } from '../Domain/Interfaces/ISeismeFilter';
import { Seisme } from '../Domain/Models/seisme.model';

@ApiTags('alea/seisme')
@Controller('alea/seisme')
export class SeismeController {
  constructor(private seismeService: SeismeService) {}

  @Public()
  @Get()
  async findAndCountAll(
    @Query() query: ISeismeFilter,
  ): Promise<{ rows: SeismeDto[]; count: number }> {
    //Renvoie la liste de tous les seismes
    const seismes = await this.seismeService.findAndCountAll(query);
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
