import { Task } from '@schedulus/shared';
import styles from './TaskCard.module.scss';

export function TaskCard({ task }: { task: Task }) {
  return (
    <section className={styles.card}>
      <h3>{task.name}</h3>
    </section>
  );
}
