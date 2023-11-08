import React from "react"; // Import React from "react" npm package
// Declare a function named TodoList 
// Add props as a parameter in the TodoListItem function
function TodoListItem({ todo }) {
    return (     // Add a multi-line return statement with JSX
        <li>{todo.title}</li>
    );
}
export default TodoListItem;// Export TodoListItem function as the default module