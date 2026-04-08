export type Task = {
  title: string,
  description: string,
  user: string
}

export interface TaskList {
  tasks: Task[]
}
