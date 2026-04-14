import './App.css'

import TaskBox from './components/TaskBox'
import type { Task, TaskList } from './types/Types'
import { useDarkMode } from './services/DarkMode'
import { useEffect, useState } from 'react'
import { apiService } from './services/ApiService'


const defultTasks: TaskList = {
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


function App() {
  const { theme, toggleTheme } = useDarkMode();

  const [tasks, setTasks] = useState<Task[]>(defultTasks.tasks);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await apiService.getAllTasks();
        // console.log(data);
        setTasks(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <>
      <div className="min-h-screen bg-bg-main text-text-main p-8 text-center">
        <h1 className='text-2xl text-amber-500' >API TODO client</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          {theme === 'light' ? 'Modo Oscuro 🌙' : 'Modo Claro ☀️'}
        </button>
        <div className='grid grid-cols-3 sm:grid-cols-2:grid-cols-3 xl:grid-cols-4 gap-6 p-6'>
          {tasks.map((task, index) => (
            <TaskBox key={index} task={task} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;