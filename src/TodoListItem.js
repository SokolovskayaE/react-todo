import React from "react";
import styles from "./TodoListItem.module.css";

function TodoListItem({ todo, onRemoveTodo }) { 
    return (
      <div className={styles.container}>     
        <li className={styles.listItem}>
            {todo.title}
        </li>
            <button 
                type="button" 
                onClick={() => onRemoveTodo(todo.id)}
                className={styles.buttonItem}
            >
                Remove
            </button>
      </div>
    );
}
export default TodoListItem;