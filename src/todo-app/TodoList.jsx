import styles from "../assets/TodoList.module.css";

function TodoList({ persons, deleteTodo }) {
    return (
        <div className="container py-3">
            <h2 className={styles.heading}>Todos</h2>
            <ul className={styles.list}>
                {persons.map((person, index) => (
                    <li key={index} className={styles.item}>
                        <div>
                            <div className="fw-semibold">{person.name}</div>
                            <div className={styles.meta}>{person.date}</div>
                        </div>
                        <button className={styles.btnDanger} onClick={()=>deleteTodo(person.name)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
