import { Task } from '@schedulus/shared';

export function TaskCard({ task }: { task: Task }) {
  return (
    <section>
      <h3>{task.name}</h3>
    </section>
  );
}
