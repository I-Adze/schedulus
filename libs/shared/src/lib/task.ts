import { Period } from './period';

export type DateString = string;

export interface Task {
  id: string;
  name: string;
  completed: DateString[];
  period: Period;
}
