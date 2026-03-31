import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './tasks.schema';

@Injectable()
export class TasksService {
    constructor(
        @InjectModel(Task.name) private taskModel: Model<Task>,
    ) {}

    async create(title: string) {
        return this.taskModel.create({ title });
    }

    async findAll() {
        return this.taskModel.find();
    }
}