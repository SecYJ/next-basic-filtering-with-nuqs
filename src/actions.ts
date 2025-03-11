"use server";

import { revalidatePath } from "next/cache";

export const update = async () => {
    revalidatePath("/example1");
};

export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export type ApiResponse = {
    success: boolean;
    data?: Todo;
    error?: string;
};

export const fetchTodoById = async (id: number): Promise<ApiResponse> => {
    try {
        // Call JSONPlaceholder API to get a todo by ID
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                // Next.js cache settings
                // next: { revalidate: 60 }, // Revalidate every 60 seconds
            },
        );

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        // Revalidate the example2 page to refresh the server component
        revalidatePath("/example2");

        return {
            success: true,
            data,
        };
    } catch (error) {
        console.error(
            `Error fetching todo #${id} from JSONPlaceholder API:`,
            error,
        );
        return {
            success: false,
            error:
                error instanceof Error
                    ? error.message
                    : "Unknown error occurred",
        };
    }
};
