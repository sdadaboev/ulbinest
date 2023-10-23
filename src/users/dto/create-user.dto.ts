import { ApiProperty } from '@nestjs/swagger';

export class CreateaUserDto {
    @ApiProperty({example: "user@mail", description: "email"})
    readonly email: string
    @ApiProperty({example: "undefined77", description: "password"})
    readonly password: string
}


