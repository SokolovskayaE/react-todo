import React from 'react'; // Import React from "react" npm package
import TodoList from "./TodoList"; // Import the TodoList component
import AddTodoForm from "./AddTodoForm"; // Import AddTodoForm

function App() {
return (
<div>
<h1>Todo List</h1> {/*Create a level-one heading that says "Todo List"*/}
<TodoList /> {/* TodoList component */}
<AddTodoForm /> {/* AddTodoForm component */}
</div>
);
}

export default App; // Export App function as the default module