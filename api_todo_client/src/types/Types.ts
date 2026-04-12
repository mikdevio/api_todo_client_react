
export type Task = {
  title: string,
  description: string,
  user: string,
  completed: boolean,
  createdAt: Date,
  categories: Category[],
  project: Project,
}

export interface TaskList {
  tasks: Task[]
}

export type Category = {
  name: string,
  description: string,
  createdAt: Date,
  task: Task[]
}

export type Project = {
  name: string,
  description: string,
  color: string,
  status: string,
  user: User,
  tasks: Task[],
  createdAt: Date
}

export type User = {
  firstName: string,
  lastName: string,
  address: string,
  email: string,
  isActive: boolean,
  createdAt: Date,
  projects: Project[]
}

