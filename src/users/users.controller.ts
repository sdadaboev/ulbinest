import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateaUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
@ApiTags("users")
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @ApiOperation({summary: "create new user"})
    @ApiResponse({status: 200, type: User})

    @Post('/create-user')
    createUser(@Body() userDto: CreateaUserDto) {
        return this.userService.createUser(userDto)
    }

    @ApiOperation({summary: "get all users"})
    @ApiResponse({status: 200, type: [User]})
    
    @Get('/users') 
    getAllUsers()  {
        return this.userService.getAllUsers()
    }
}
