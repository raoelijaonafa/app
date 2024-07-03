import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import {Request,Response} from 'express'
import { CreateUserDto } from 'src/users/dtos/CreateUser.Dto.';
@Controller('users')
export class UsersController {

    @Get()
    getUsers(){
        return{Username:'raoelijaonaf', email:'jfanirytio@gmail.com'};
}
 

@Post('create')
createUser(@Body() userData:CreateUserDto){
     
console.log(userData);
return{};
}
}
