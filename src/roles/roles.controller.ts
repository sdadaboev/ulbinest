import { Controller, Body, Post, Param, Get } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateaRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
    constructor(private readonly roleService: RolesService) {}

    @Post()
    create(@Body() dto : CreateaRoleDto) {
        return this.roleService.createRole(dto)
    }

    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value)
    }
}
