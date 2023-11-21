import React, { useState, useEffect } from 'react'; // Import React from "react" npm package
import TodoList from "./TodoList"; // Import the TodoList component
import AddTodoForm from "./AddTodoForm"; // Import AddTodoForm

function useSemiPersistentState() {
    const [todoList, setTodoList] = useState(() => {// Create a new state variable named todoList with setter setTodoList
        const savedTodoList = localStorage.getItem('savedTodoList');//Update the default state for todoList to read your "savedTodoList" item from localStorage. Hint: localStorage.getItem method
        return savedTodoList ? JSON.parse(savedTodoList) : [];
    });
    
    useEffect(() => { // Define a useEffect React hook with todoList as a dependency.
        localStorage.setItem('savedTodoList', JSON.stringify(todoList)); //Inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList" + Convert todoList to a string before saving in localStorage
    }, [todoList]); // Dependency array with todoList
    
    return [todoList, setTodoList];
}

function App() {
    const [todoList, setTodoList] = useSemiPersistentState(); // Use the custom hook

    function addTodo(newTodo) { // Function named addTodo that takes newTodo as a parameter 
       setTodoList([...todoList, newTodo]);
    }
    function removeTodo(id) { // Define a new handler function named removeTodo with parameter id
        const updatedTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(updatedTodoList); // Call the setTodoList state setter and pass the new or modified Array
    }

    return (
        <> 
            <h1>Todo List</h1> {/*Create a level-one heading that says "Todo List"*/}
            <AddTodoForm onAddTodo={addTodo} /> {/*AddTodoForm component*/}
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} /> {/*TodoList component + Pass todoList as a prop named todoList to the TodoList component* + Pass removeTodo as a callback handler prop named onRemoveTodo to the TodoList component*/}
        </>
    );
}

export default App; // Export App function as the default module