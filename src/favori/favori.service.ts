import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Favori } from './favori.model';

@Injectable()
export class FavoriService {
  constructor(
    @InjectModel(Favori)
    private favoriModel: typeof Favori,
  ) {}

  async findAll(): Promise<Favori[]> {
    return this.favoriModel.findAll();
  }
}
