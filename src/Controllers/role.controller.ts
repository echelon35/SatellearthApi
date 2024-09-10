import { Controller, Get } from '@nestjs/common';
import { RoleService } from '../Application/Services/role.service';
import { RoleDto } from '../Domain/DTO/role.dto';

@Controller('auth/role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Get()
  async findAll(): Promise<RoleDto[]> {
    const roles = await this.roleService.findAll();
    return roles;
  }
}
