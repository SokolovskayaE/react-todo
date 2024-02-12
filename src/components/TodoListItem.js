import React from "react";
import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";

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
// Define propTypes for TodoListItem
TodoListItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired,
    onRemoveTodo: PropTypes.func.isRequired
};
export default TodoListItem;