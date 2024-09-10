import { Controller, Get } from '@nestjs/common';
import { FavoriService } from 'src/Application/Services/favori.service';
import { FavoriDto } from 'src/Domain/DTO/favori.dto';

@Controller('favori')
export class FavoriController {
  constructor(private favoriService: FavoriService) {}

  @Get()
  async findAll(): Promise<FavoriDto[]> {
    const favoris = await this.favoriService.findAll();
    return favoris;
  }
}
