import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/userRoles.model";

interface UserCreationAttrs {
    email: string,
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({example: "1", description: "unical identifier"})
    @Column( {type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number 
    @ApiProperty({example: "sardoreve@gmail.com", description: "e mail"})
    @Column( {type: DataType.STRING, unique: true, allowNull: false})
    email: string 
    @ApiProperty({example: "undefined", description: "password"})
    @Column( {type: DataType.STRING,  allowNull: false})
    password: string 
    @ApiProperty({example: "true", description: "banned or not"})
    @Column( {type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean 
    @ApiProperty({example: "cheeter damn", description: "kick him, he uses cheets"})
    @Column( {type: DataType.BOOLEAN, allowNull: true})
    banReason: string

    @BelongsToMany(()=> Role, ()=> UserRoles)
    roles: Role[];
}