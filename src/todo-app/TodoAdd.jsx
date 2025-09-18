import { useState } from "react";
import styles from "../assets/TodoList.module.css";

function TodoAdd({ todoDetail }) {
    const [dueText, setText] = useState(""); // Text input
    const [dueDate, setDate] = useState(""); // Date input

    const handleAdd = () => {
        if (dueText && dueDate) {
            todoDetail(dueText, dueDate); // Parent function call
            setText(""); // Clear text input
            setDate(""); // Clear date input
        }
    };

    return (
        <div className="container py-3">
            <div className={styles.addRow}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter todo name"
                    aria-label="Todo name"
                    value={dueText}
                    onChange={(e) => setText(e.target.value)}
                />

                <input
                    type="date"
                    className={styles.date}
                    aria-label="Todo date"
                    value={dueDate}
                    onChange={(e) => setDate(e.target.value)}
                />

                <button className={styles.btn} onClick={handleAdd}>Add</button>
            </div>
        </div>
    );
}

export default TodoAdd;
