import React, { useState, useEffect } from 'react'; // Import React from "react" npm package
import TodoList from "./TodoList"; // Import the TodoList component
import AddTodoForm from "./AddTodoForm"; // Import AddTodoForm

function App() {
    const [todoList, setTodoList] = useState([]); // Create a new state variable named todoList with setter setTodoList
    const [isLoading, setIsLoading] = useState (true); // create a new state variable named isLoading with update function named setIsLoading with default value true
    
    useEffect(() => { // useEffect React hook with an empty dependency list
        const TimeOutPromise = new Promise((resolve, reject) => { //Inside the side-effect handler function, define a new Promise and pass in a callback function with parameters resolve and reject
            setTimeout(() => { //callback: function with no parameters
                resolve({ //Inside the timeout callback function, call the parameter resolve which is a callback function for when the Promise is successful and pass it an Object with property data as a nested empty Object
                    data: {
                        todoList: JSON.parse(localStorage.getItem('savedTodoList')) 
                    }
                });
            }, 2000); // delay time: 2000 milliseconds
        });
        TimeOutPromise.then(result => {  // Chain a then method to your Promise constructor and pass it a function with parameter result
            setTodoList(result.data.todoList); // Inside the function, use your state setter to update the list and pass the todoList from your result object
            setIsLoading(false); 
        });
    }, []);
     
    useEffect(() => { // Define a useEffect React hook with todoList as a dependency.
        if (!isLoading) {
        localStorage.setItem('savedTodoList', JSON.stringify(todoList)); //Inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList" + Convert todoList to a string before saving in localStorage
        }
    }, [todoList, isLoading]); // Dependency array with todoList

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
            {isLoading ? <p>Loading...</p>: // Create a new paragraph element above TodoList with text "Loading..."
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
            } 
        </>
    );
}
export default App; // Export App function as the default module