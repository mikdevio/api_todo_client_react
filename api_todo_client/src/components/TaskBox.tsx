import type { Task } from "../types/Types";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";


// 1. Interfaz de propiedades
interface TaskBoxProps {
    task: Task
}

// 2. Componente react para TaskBox
const TaskBox: React.FC<TaskBoxProps> = ({ task }) => {
    return (
        <>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-800">
                <CardHeader>
                    <div className="text-xs font-medium text-blue-500 dark:text-blue-400 justify-between">
                        <div>{task.project.name}</div>
                        <div>{task.completed ? "Completed" : "Incomplete"}</div>
                    </div>
                    <CardTitle className="text-xl">{task.title}</CardTitle>
                    <CardDescription>{task.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                    <button className="text-sm hover:underline">View</button>
                    <span className="text-xs text-slate-500">{task.createdAt.toDateString()}</span>
                </CardFooter>
            </Card>
        </>
    );
};

export default TaskBox;