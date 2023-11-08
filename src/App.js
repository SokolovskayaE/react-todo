import React, { useState } from 'react'; // Import React from "react" npm package
import TodoList from "./TodoList"; // Import the TodoList component
import AddTodoForm from "./AddTodoForm"; // Import AddTodoForm


function App() {
    const [todoList, setTodoList] = useState([]); // Create a new state variable named todoList with setter setTodoList and default value of an empty array

    function addTodo(newTodo) { // Function named addTodo that takes newTodo as a parameter 
       setTodoList([...todoList, newTodo]);
    }
    return (
        <div>
        <h1>Todo List</h1> {/*Create a level-one heading that says "Todo List"*/}
        <TodoList todoList={todoList} /> {/*TodoList component + Pass todoList as a prop named todoList to the TodoList component*/}
        <AddTodoForm onAddTodo={addTodo} /> {/*AddTodoForm component*/}
        </div>
    );
}

export default App; // Export App function as the default module