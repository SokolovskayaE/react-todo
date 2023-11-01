import React, { useState } from 'react'; // Import React from "react" npm package
import TodoList from "./TodoList"; // Import the TodoList component
import AddTodoForm from "./AddTodoForm"; // Import AddTodoForm

function App() {
    const [newTodo, setNewTodo] = useState (""); //Create a new state variable named newTodo with update function named setNewTodo
    return (
        <div>
        <h1>Todo List</h1> {/*Create a level-one heading that says "Todo List"*/}
        <TodoList /> {/*TodoList component*/}
        <AddTodoForm onAddTodo={setNewTodo}  /> {/*AddTodoForm component + Pass setNewTodo as a callback handler prop named onAddTodo to the AddTodoForm component*/}
        <p>{newTodo}</p> {/*Add a paragraph element that displays the value of newTodo variable*/}
        </div>
    );
}

export default App; // Export App function as the default module