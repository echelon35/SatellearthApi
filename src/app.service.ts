import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize) {}

  async checkDatabaseConnection(): Promise<boolean> {
    try {
      // Exécute une requête simple pour tester la connexion
      await this.sequelize.authenticate();
      return true; // Si la connexion est OK
    } catch (error) {
      return false; // Si la connexion échoue
    }
  }
}
