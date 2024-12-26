import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/service/prisma/prisma.service';
import { AddTaskDto } from './dto/addTask.dto';

@Injectable()
export class TaskService {

    constructor (private readonly prisma:PrismaService){

    }
    getAllTasks(){
        return this.prisma.task.findMany()
    }
    addTask(input:AddTaskDto){
        return this.prisma.task.create({
            data:input
        })
    }
}
