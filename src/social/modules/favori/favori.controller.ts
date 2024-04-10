import { Controller, Get } from '@nestjs/common';
import { FavoriService } from './favori.service';
import { FavoriDto } from './DTO/favori.dto';

@Controller('favori')
export class FavoriController {
  constructor(private favoriService: FavoriService) {}

  @Get()
  async findAll(): Promise<FavoriDto[]> {
    const favoris = await this.favoriService.findAll();
    return favoris;
  }
}
