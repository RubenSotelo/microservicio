import { Controller, Delete, Get, Post, Put, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user';

@Controller('')
export class UserController {

    constructor(private readonly appService: UserService) {}

    @Get('users/all')
    allUsers(){
        return this.appService.allUsers();
    }
  
    @Get('user/:id')
    idUser(@Param('id') id: number){
        return this.appService.idUser(id);
    }
    
    @Post('user/crear')
    crearUser(@Body() user: UserDto){
        return this.appService.crearUser(user);
    }
    
    @Put('user/edit/:id')
    editUser(@Param('id') id: number, @Body() user: UserDto){
        return this.appService.editUser(id, user);
    }
    
    @Delete('user/elim')
    elimUser(id: number){
        return this.appService.elimUser(id);
    }

}
