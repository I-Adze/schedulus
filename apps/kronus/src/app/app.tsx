import { Period, Task } from '@schedulus/shared';
import { useEffect, useState } from 'react';
import { TaskList } from './tasks/TaskList';

const addTask = () => {
  fetch('/api/tasks/add', {
    method: 'post',
    body: JSON.stringify({ name: 'test', completed: [new Date().toString()], period: Period.DAY } as Omit<Task, 'id'>),
    headers: { 'content-type': 'application/json' },
  });
};

export function App() {
  const [tasks, setTask] = useState<Task[]>([]);

  useEffect(() => {
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((task) => setTask(task));
  }, []);

  const columns = [
    { name: 'Daily', tasks: tasks.filter((task) => task.period === Period.DAY) },
    { name: 'Weekly', tasks: tasks.filter((task) => task.period === Period.WEEK) },
    { name: 'Monthly', tasks: tasks.filter((task) => task.period === Period.MONTH) },
  ];

  return (
    <>
      <button onClick={addTask}>Add Task</button>
      <TaskList columns={columns}></TaskList>
    </>
  );
}

export default App;
