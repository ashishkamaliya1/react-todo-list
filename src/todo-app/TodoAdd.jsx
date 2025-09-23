import { useState } from "react";
import { useTodos } from "./TodoContext.jsx";
import styles from "../assets/TodoList.module.css";

function TodoAdd() {
    const { addTodo } = useTodos();
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleAdd = () => {
        if (title && dueDate) {
            addTodo(title, dueDate);
            setTitle("");
            setDueDate("");
        }
    };

    return (
        <div className="container py-3">
            <div className={styles.addRow}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter title"
                    aria-label="Todo title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="date"
                    className={styles.date}
                    aria-label="Due date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />

                <button className={styles.btn} onClick={handleAdd}>Add</button>
            </div>
        </div>
    );
}

export default TodoAdd;
