import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InondationService } from '../Application/Services/inondation.service';
import { Public } from '../Commons/Decorators/public.decorator';
import { InondationDto } from '../Domain/DTO/inondation.dto';
import { Inondation } from 'src/Domain/Models/inondation.model';
import { IInondationFilter } from 'src/Domain/Interfaces/IInondationFilter';

@ApiTags('alea/inondation')
@Controller('alea/inondation')
export class InondationController {
  constructor(private inondationService: InondationService) {}

  @Public()
  @Get()
  async findAndCountAll(
    @Query() query: IInondationFilter,
  ): Promise<{ rows: InondationDto[]; count: number }> {
    //Renvoie la liste de toutes les inondations
    const inondations = await this.inondationService.findAndCountAll(query);
    return inondations;
  }

  @Public()
  @Get('disaster/:disasterId')
  async findOneByDisaster(
    @Param('disasterId') disasterId: number,
  ): Promise<Inondation> {
    //Renvoie la liste de tous les seismes
    const inondations =
      await this.inondationService.findOneByDisaster(disasterId);
    return inondations;
  }
}
