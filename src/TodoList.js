import React from "react"; // Import React from "react" npm package
import TodoListItem from './TodoListItem'; // Import TodoListItem

// Create array and store it in a variable named todoList
const todoList = [
    {id:1,title: "Coding Assignment" },
    {id:2,title: "Mindset Assignment" },
    {id:3,title: "Mentor Session" },
    {id:4,title: "Mentor Assignment" },
    {id:5,title: "Group Session" },
    ];

// Declare a function named TodoList
function TodoList() {
    return ( // Add a multi-line return statement with JSX
        <ul> {/* Create an unordered list (<ul>)//</ul>*/}
         {todoList.map((item) => { {/* Inside the map method, use the TodoListItem component */}
            return (
            <TodoListItem key={item.id} todo={item} /> // Pass key as a prop equal to the id of the todo object. Pass todo as a prop.
            );
         })}
        </ul>
);
}
export default TodoList;// Export TodoList function as the default module