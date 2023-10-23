import { ApiProperty } from '@nestjs/swagger';

export class CreateaRoleDto {
    // @ApiProperty({example: "user@mail", description: "email"})
    readonly value: string
    // @ApiProperty({example: "undefined77", description: "password"})
    readonly description: string
}


