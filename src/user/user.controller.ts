import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user-entity';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Post()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }


}