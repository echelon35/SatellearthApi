import { Controller, Get, Param } from '@nestjs/common';

@Controller('alea')
export class AleaController {
  @Get()
  findAll(): void {
    //Renvoie la liste de tous les aléas
  }

  @Get()
  findOne(@Param('id') id: string): void {
    //Renvoie un aléa par son id
  }
}
