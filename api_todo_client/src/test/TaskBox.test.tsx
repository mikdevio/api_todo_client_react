import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from 'vitest';
import TaskBox from '@/components/common/TaskBox';
import type { Project, Task, User } from "@/types/Types";

describe('Testing TaskBox', () => {

    const test_task: Task = {
        title: "Test task 001",
        description: "Test task project 1",
        categories: [],
        completed: false,
        project: {
            name: "Project 01",
            description: "project 001",
            color: "red",
            status: "",
            user: {

            } as User,
        } as Project,
        createdAt: new Date("12/04/2025"),
    }

    it('Must renderize with correct types', () => {
        render(<TaskBox task={test_task} />);

        expect(screen.getByText('Test task 001')).toBeInTheDocument();
        expect(screen.getByText('Test task project 1')).toBeInTheDocument();
    });


})