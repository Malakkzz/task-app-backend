import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { AddTaskDto } from './dto/addTask.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAllTasks(){
    return this.taskService.getAllTasks()
  }
  
  @Post("create")
  addTask(@Body() input:AddTaskDto){
    return this.taskService.addTask(input)
  }

}
