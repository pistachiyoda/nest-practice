import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { PrismaService } from './prisma/prisma.service';
import { TodoService } from './todo/todo.service';

@Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [AppService, PrismaService, TodoService],
})
export class AppModule {}
