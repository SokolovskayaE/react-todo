import React, { useState, useEffect } from 'react'; // Import React from "react" npm package
import TodoList from "./TodoList"; // Import the TodoList component
import AddTodoForm from "./AddTodoForm"; // Import AddTodoForm

function App() {
    const [todoList, setTodoList] = useState([]); // Create a new state variable named todoList with setter setTodoList
    const [isLoading, setIsLoading] = useState (true); // create a new state variable named isLoading with update function named setIsLoading with default value true

const fetchData = async() => { // Create a new async function fetchData
const options = { // Inside the fetchData function, declare an empty object variable named options
    method: "GET", // Add a method key with the value 'GET'
    headers: { Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    const todos = data.records.map((record) => ({
      title: record.fields.title,
      id: record.id
    }));
 
  setTodoList(todos); // Set the application's todoList
  setIsLoading(false); // Set isLoading to false to indicate the fetch is complete

} catch (error) {
  console.log("Error fetching data: ", error);
}
};
    useEffect(() => {
        fetchData();
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