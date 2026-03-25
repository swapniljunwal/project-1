import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    getTasks() {
        return this.tasksService.findAll();
    }

    @Post()
    createTask(@Body() body: { title: string }) {
        return this.tasksService.create(body.title);
    }
}