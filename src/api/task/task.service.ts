import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/service/prisma/prisma.service';
import { AddTaskDto } from './dto/addTask.dto';
import { ReorderTaskDto } from './dto/reorderTask.dto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  getAllTasks() {
    return this.prisma.task.findMany({
      orderBy: {
        order: 'asc',
      },
    });
  }

  async addTask(input: AddTaskDto) {
    const taskCount = await this.prisma.task.count();
    return this.prisma.task.create({
      data: {
        ...input,
        order: taskCount + 1,
      },
    });
  }

  reorderTask(input: ReorderTaskDto[]) {
    const reorderTransaction = input.map((task) => {
      return this.prisma.task.update({
        where: {
          id: task.id,
        },
        data: {
          order: task.order,
        },
      });
    });

    return this.prisma.$transaction(reorderTransaction);
  }
}
