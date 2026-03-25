import { Injectable } from '@nestjs/common';

type Task = {
    id: number;
    title: string;
    };

    @Injectable()
    export class TasksService {
    private tasks: Task[] = []; // ✅ FIXED

    create(title: string) {
        const newTask: Task = { id: Date.now(), title };
        this.tasks.push(newTask);
        return newTask;
    }

    findAll(): Task[] {
        return this.tasks;
    }
}