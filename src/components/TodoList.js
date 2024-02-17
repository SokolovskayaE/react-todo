import React from "react"; 
import TodoListItem from './TodoListItem'; 
import styles from "./TodoList.module.css";
import PropTypes from "prop-types";

function TodoList({ todoList, onRemoveTodo }) {  // Declare a function named TodoList + Add props as a parameter to the TodoList functional component
    return ( // Add a multi-line return statement with JSX
        <ul className={styles.todoList}> {/* Create an unordered list (<ul>)//</ul>*/}
         {todoList.map((item) => (  // Inside the map method, use the TodoListItem component + Change todoList to reference props instead of the hard-coded variable
            <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} />  // Pass key as a prop equal to the id of the todo object. Pass todo as a prop.
            ))}
        </ul>
    );
}
// Define propTypes for TodoList
TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ),
    onRemoveTodo: PropTypes.func.isRequired,
  }
export default TodoList;