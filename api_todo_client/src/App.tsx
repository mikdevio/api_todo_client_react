import './App.css'

import TaskBox from './components/TaskBox'
import type { TaskList } from './types/Types'
import { useDarkMode } from './services/DarkMode'


const defultTasks: TaskList = {
  tasks: [
    {
      title: 'Task 001',
      description: 'Description of task 001',
      user: 'user_001',
    },
    {
      title: 'Task 002',
      description: 'Description of task 002',
      user: 'user_002',
    },
    {
      title: 'Task 003',
      description: 'Description of task 003',
      user: 'user_001',
    },
  ],
}


function App() {
  const { theme, toggleTheme } = useDarkMode();

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
          {defultTasks.tasks.map((task, index) => (
            <TaskBox key={index} task={task} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;