import styles from "../assets/TodoList.module.css";
import { useTodos } from "./TodoContext.jsx";

function TodoList() {
    const { todos, deleteTodo } = useTodos();
    return (
        <div className="container py-3">
            <h2 className={styles.heading}>Todos</h2>
            <ul className={styles.list}>
                {todos.map((todo, index) => (
                    <li key={index} className={styles.item}>
                        <div>
                            <div className="fw-semibold">{todo.title}</div>
                            <div className={styles.meta}>{todo.dueDate}</div>
                        </div>
                        <button className={styles.btnDanger} onClick={() => deleteTodo(todo.title)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
