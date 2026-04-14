import axios from "axios";
import type { AxiosInstance } from "axios";

import type { Category, Project, Task, TaskResponse, User } from "@/types/Types";

const API_TODO_URL = import.meta.env.VITE_API_TODO_URL;


class ApiService {
    private http: AxiosInstance;

    constructor(httpClient: AxiosInstance) {
        this.http = httpClient;
    }

    // Metodo para obtener todos las tareas
    async getAllTasks(): Promise<Task[]> {
        try{
            const { data } = await this.http.get<TaskResponse>('/task');
            return data.data.map((task: Task) => ({
            ...task,
            createdAt: new Date(task.createdAt) 
        }));
        } catch (error) {
            console.log(error);
            return [];
        }
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

const axiosHttp: AxiosInstance = axios.create({
    baseURL: API_TODO_URL,
    timeout: 10000,
})

export const apiService = new ApiService(axiosHttp);