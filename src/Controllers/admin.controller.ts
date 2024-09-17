import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/Commons/Decorators/role.decorator';
import { Role } from 'src/Commons/Enumerators/role.enum';
import { RolesGuard } from 'src/Guards/role.guard';

@Controller('admin')
export class AdminController {
  constructor() {}

  @Get()
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  async isAdmin(): Promise<boolean> {
    return true;
  }
}
