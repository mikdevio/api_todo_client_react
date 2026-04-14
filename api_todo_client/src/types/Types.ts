
export interface Task {
  title: string,
  description: string,
  user: string,
  completed: boolean,
  createdAt: Date,
  categories: Category[],
  project: Project,
}

export interface ApiResponse {
  status: string,
  msg: string,
}

export interface TaskResponse extends ApiResponse {
  data: Task[]
}

export interface TaskList {
  tasks: Task[]
}

export interface Category {
  name: string,
  description: string,
  createdAt: Date,
  task: Task[]
}

export interface Project {
  name: string,
  description: string,
  color: string,
  status: string,
  user: User,
  tasks: Task[],
  createdAt: Date
}

export interface User {
  firstName: string,
  lastName: string,
  address: string,
  email: string,
  isActive: boolean,
  createdAt: Date,
  projects: Project[]
}

