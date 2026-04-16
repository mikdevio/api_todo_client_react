import type { TaskList } from "@/types/Types";

export const DEFAULT_TASKS: TaskList = {
  tasks: [
    {
      title: 'Task 001',
      description: 'Description of task 001',
      user: 'user_001',
      categories: [],
      completed: false,
      createdAt: new Date("2026-10-13"),
      project: {
        name: "project_001",
        description: "Project 001",
        color: "red",
        status: "active",
        user: {
          firstName: "user_001",
          lastName: "admin",
          address: "001 Street and St. 002 Street",
          email: "user_01@mail.com",
          isActive: true,
          createdAt: new Date("2026-01-14"),
          projects: []
        },
        tasks: [],
        createdAt: new Date("2026-02-15")
      }
    },
    {
      title: 'Task 002',
      description: 'Description of task 002',
      user: 'user_002',
      categories: [],
      completed: false,
      createdAt: new Date("2026-10-13"),
      project: {
        name: "project_001",
        description: "Project 001",
        color: "red",
        status: "active",
        user: {
          firstName: "user_002",
          lastName: "admin",
          address: "001 Street and St. 002 Street",
          email: "user_01@mail.com",
          isActive: true,
          createdAt: new Date("2026-01-14"),
          projects: []
        },
        tasks: [],
        createdAt: new Date("2026-02-15")
      }
    },
    {
      title: 'Task 003',
      description: 'Description of task 003',
      user: 'user_001',
      categories: [],
      completed: false,
      createdAt: new Date("2026-10-13"),
      project: {
        name: "project_001",
        description: "Project 001",
        color: "red",
        status: "active",
        user: {
          firstName: "user_003",
          lastName: "admin",
          address: "001 Street and St. 002 Street",
          email: "user_01@mail.com",
          isActive: true,
          createdAt: new Date("2026-01-14"),
          projects: []
        },
        tasks: [],
        createdAt: new Date("2026-02-15")
      }
    },
  ],
}