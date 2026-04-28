import { PlusIcon } from "lucide-react";

import type { Task } from "@/types";
import { TaskCard } from "@/components/common/TaskCard";
import { Button } from "@/components/ui/button";

interface SectionCardsProps {
  tasks: Task[];
}

export const SectionCards: React.FC<SectionCardsProps> = ({ tasks }) => {
  return (
    <>
      <div className="flex justify-start">
        <Button size='icon' variant="outline">
          <PlusIcon></PlusIcon>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">

        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </>
  );
};
