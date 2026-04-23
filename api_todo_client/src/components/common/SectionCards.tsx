import type { Task } from "@/types";
import { TaskCard } from "./TaskCard";

interface SectionCardsProps {
  tasks: Task[];
}

export const SectionCards: React.FC<SectionCardsProps> = ({ tasks }) => {
  return (
    <div className="grid grid-cols-3 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      {tasks.map((task, index) => (
        <TaskCard task={task} />
      ))}
    </div>
  );
};
