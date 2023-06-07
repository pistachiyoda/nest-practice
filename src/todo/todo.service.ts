import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/todo.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async getList() {
    const result = await this.prisma.task.findMany();
    return [...result];
  }

  async create(task: Task) {
    const result = await this.prisma.task.create({
      data: {
        title: task.title,
      },
    });
    return result;
  }

  async update(task: Task) {
    const result = await this.prisma.task.update({
      where: {
        id: task.id,
      },
      data: {
        title: task.title,
      },
    });
    return result;
  }

  async delete(id: number) {
    const result = await this.prisma.task.delete({
      where: {
        id: id,
      },
    });
    return result;
  }
}
