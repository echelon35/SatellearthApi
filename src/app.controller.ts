import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { Public } from './Commons/Decorators/public.decorator';

@ApiTags('api')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  @Public()
  async getHealth(): Promise<boolean> {
    const dbIsConnected = await this.appService.checkDatabaseConnection();
    return dbIsConnected;
  }
}
