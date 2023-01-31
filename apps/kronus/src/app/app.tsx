import { useEffect, useState } from 'react';
import { Task } from '@schedulus/shared';

export function App() {
  const [task, setTask] = useState<Task | undefined>();

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((task) => setTask(task));
  }, []);
  return <div>{task?.id}</div>;
}

export default App;
