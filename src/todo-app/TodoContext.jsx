import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
    const initialTodos = [
        { title: "Jay", dueDate: "2025-09-18" },
        { title: "Hiren", dueDate: "2025-09-18" },
        { title: "Viral", dueDate: "2025-09-18" },
        { title: "Ashish", dueDate: "2025-09-18" },
        { title: "Kunal", dueDate: "2025-09-18" }
    ];

    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (title, dueDate) => {
        const newTodo = { title, dueDate };
        setTodos(prev => [...prev, newTodo]);
    };

    const deleteTodo = (todoTitle) => {
        setTodos(prev => prev.filter(t => t.title !== todoTitle));
    };

    const value = { todos, addTodo, deleteTodo };

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodos() {
    const ctx = useContext(TodoContext);
    if (!ctx) {
        throw new Error('useTodos must be used within a TodoProvider');
    }
    return ctx;
}

export default TodoContext;


