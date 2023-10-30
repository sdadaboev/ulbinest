import { ApiProperty } from '@nestjs/swagger';

export class CreateaUserDto {
    @ApiProperty({example: "daniel", description: "username"})
    readonly username: string
    @ApiProperty({example: "undefined77", description: "password"})
    readonly password: string
}


