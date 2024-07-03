import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import {Request,Response} from 'express'
import { CreateUserDto } from 'src/users/dtos/CreateUser.Dto.';
@Controller('users')
export class UsersController {




    @Get()
    getUsers(@Query('sortBy') sortBy:string){
        console.log(sortBy);
        return{Username:'raoelijaonaf', email:'jfanirytio@gmail.com'};
}
 

@Post('create')
@UsePipes(new ValidationPipe())
createUser(@Body() userData:CreateUserDto){
     
console.log(userData);
return{};
}
@Get(':id')
getUserById(@Param('id',ParseIntPipe) id:number)
{
    console.log(id);
    return {id};
}
}
