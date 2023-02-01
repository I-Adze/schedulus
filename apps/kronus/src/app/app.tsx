import { useEffect, useState } from 'react';
import { Task } from '@schedulus/shared';

export function App() {
  const [tasks, setTask] = useState<Task[] | undefined>();

  useEffect(() => {
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((task) => setTask(task));
  }, []);
  return (<>{tasks?.map( task => <div key={task.id}>{task.id}</div>)}</>)
}

export default App;
