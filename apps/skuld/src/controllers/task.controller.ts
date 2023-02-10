import { Task } from '@schedulus/shared';
import Surreal from 'surrealdb.js';
import { Records } from '../db/records';

export default class TaskController {
  static tasks = async (): Promise<Task[]> => {
    return Surreal.Instance.select(Records.task);
  };

  static addTasks = async (task: Omit<Task, 'id'>): Promise<Task> => {
    return Surreal.Instance.create(Records.task, task);
  };
}
