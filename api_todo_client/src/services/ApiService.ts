import type { Category, Project, Task, User } from "@/types/Types";
import type { AxiosInstance } from "axios";


class ApiService {
    private http: AxiosInstance;

    constructor(httpClient: AxiosInstance) {
        this.http = httpClient;
    }

    // Metodo para obtener todos las tareas
    async getAllTasks(): Promise<Task[]> {
        const {data} = await this.http.get<Task[]>('/task');
        return data
    }

    async getAllUsers(): Promise<User[]> {
        const {data} = await this.http.get<User[]>('/user')
        return data;
    }

    async getAllProjects(): Promise<Project[]> {
        const {data} = await this.http.get<Project[]>('/project')
        return data;
    }

    async getAllCategories(): Promise<Category[]> {
        const {data} = await this.http.get<Category[]>('/category')
        return data;
    }
}