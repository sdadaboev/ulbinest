import { Injectable } from '@nestjs/common';
import { CreateaRoleDto } from './dto/create-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role) {

    }
    async createRole(dto: CreateaRoleDto) {
        const role = await this.roleRepository.create(dto)
        return role 
    }


    async getRoleByValue(value: string) {
        const role = await this.roleRepository.findOne({where: {value}})
        return role
    }

}
