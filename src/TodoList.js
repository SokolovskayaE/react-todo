import React from "react"; // Import React from "react" npm package
import TodoListItem from './TodoListItem'; // Import TodoListItem

function TodoList({ todoList, onRemoveTodo }) {  // Declare a function named TodoList + Add props as a parameter to the TodoList functional component
    return ( // Add a multi-line return statement with JSX
        <ul> {/* Create an unordered list (<ul>)//</ul>*/}
         {todoList.map((item) => (  // Inside the map method, use the TodoListItem component + Change todoList to reference props instead of the hard-coded variable
            <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} />  // Pass key as a prop equal to the id of the todo object. Pass todo as a prop.
            ))}
        </ul>
    );
}
export default TodoList; // Export TodoList function as the default module