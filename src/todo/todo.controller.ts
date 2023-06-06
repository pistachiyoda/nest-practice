import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaskDto } from './todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private prisma: PrismaService) {}

  @Get('list')
  async getList() {
    const result = await this.prisma.task.findMany();
    return [...result];
  }

  @Post('')
  async add(@Body() task: TaskDto) {
    const result = await this.prisma.task.create({
      data: {
        title: task.title,
      },
    });
    return result;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() task: TaskDto) {
    const result = await this.prisma.task.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title: task.title,
      },
    });
    return result;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const result = await this.prisma.task.delete({
      where: {
        id: parseInt(id),
      },
    });
    return result;
  }
}
