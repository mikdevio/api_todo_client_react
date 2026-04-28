import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";

import type { Task } from "@/types";
import { Edit2Icon, TrashIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{task.createdAt.toDateString()}</CardDescription>
        <CardTitle>{task.title}</CardTitle>
        <CardAction>
          <Badge>
            {task.completed ? "Completed" : "Pending"}
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex justify-start gap-2 md:flex-row">
          <Button variant="outline" size="icon">
            <Edit2Icon />
          </Button>
          <Button variant="outline" size='icon'>
            <TrashIcon />
          </Button>
        </div>
      </CardFooter>
    </Card >
  );
};
