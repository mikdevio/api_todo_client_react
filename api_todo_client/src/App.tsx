// import { useEffect, useState } from 'react';

// import { useDarkMode } from './services/DarkMode';
// import { apiService } from './services/ApiService';
// import type { Task, TaskList } from './types/Types';

// import TaskBox from '@/components/common/TaskBox';
// import { DEFAULT_TASKS } from './utils/consts';

// function App() {
//   const { theme, toggleTheme } = useDarkMode();

//   const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS.tasks);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const data = await apiService.getAllTasks();
//         console.log(data);
//         setTasks(data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, []);

//   if (loading) return <p>Cargando...</p>;

//   return (
//     <>
//       <div className="min-h-screen bg-bg-main text-text-main p-8 text-center">
//         <h1 className='text-2xl text-amber-500' >API TODO client</h1>
//         <button
//           onClick={toggleTheme}
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
//         >
//           {theme === 'light' ? 'Modo Oscuro 🌙' : 'Modo Claro ☀️'}
//         </button>
//         <div className='grid grid-cols-3 sm:grid-cols-2:grid-cols-3 xl:grid-cols-4 gap-6 p-6'>
//           {tasks.map((task, index) => (
//             <TaskBox key={index} task={task} />
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import MainLayout from "./components/layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage title="API-TODO" />,
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
      {
        path: "data",
        element: <h1>Database</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
