import { SectionCards } from "@/components/common/SectionCards";
import { apiService } from "@/services/ApiService";
import { useDarkMode } from "@/services/DarkMode";
import type { Task } from "@/types";
import { useEffect, useState } from "react";

interface DashboardPageProps {
  title: string;
}

const DashboardPage: React.FC<DashboardPageProps> = () => {
  const { theme, toggleTheme } = useDarkMode();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await apiService.getAllTasks();
        console.log(data);
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
      <div className="flex flex-col gap-4">
        <SectionCards tasks={tasks} />
      </div>
    </>
  );
};

export default DashboardPage;
