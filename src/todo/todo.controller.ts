import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('list')
  async getList() {
    return await this.todoService.getList();
  }

  @Post('')
  async add(@Body() title: CreateTaskDto) {
    return await this.todoService.create(title);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() title: UpdateTaskDto) {
    return await this.todoService.update({ id, ...title });
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.todoService.delete(id);
  }
}
