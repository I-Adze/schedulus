import { Task } from '@schedulus/shared';
import { TaskCard } from './TaskCard';
import styles from './TaskList.module.scss';

interface TaskColumn {
  name: string;
  tasks: Task[];
}

export function TaskList({ columns }: { columns: TaskColumn[] }) {
  return (
    <section className={styles.layout}>
      {columns.map((column) => (
        <section key={column.name} className={styles.column}>
          <h2>{column.name}</h2>
          {column.tasks.map((task) => (
            <TaskCard key={task.id} task={task}></TaskCard>
          ))}
        </section>
      ))}
    </section>
  );
}
