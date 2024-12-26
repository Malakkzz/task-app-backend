import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { AddTaskDto } from './dto/addTask.dto';
import { ReorderTaskDto } from './dto/reorderTask.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Post('create')
  async addTask(@Body() input: AddTaskDto) {
    return await this.taskService.addTask(input);
  }

  @Post('reorder')
  reorderTask(@Body() input: ReorderTaskDto[]) {
    return this.taskService.reorderTask(input);
  }
}
