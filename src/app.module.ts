import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user-entity';
import { UsersModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"",
    database:"nestsql",
    entities:[User],
    synchronize:true
  }),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
