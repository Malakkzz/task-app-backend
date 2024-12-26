export class AddTaskDto{
    name:string
    assignee:string
    dueDate:string
    hours:number
    project:string
    difficulty:"HARD"|"MEDIUM"|"EASY"
}