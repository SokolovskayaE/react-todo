import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from "./components/TodoList"; 
import AddTodoForm from "./components/AddTodoForm"; 
import styles from "./App.module.css";


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
  <div className={styles.container}>
<BrowserRouter>
  <Routes>
    <Route path="/" element={
      <>
        <h1 className={styles.header}>ToDo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
          {isLoading ? <p className={styles.loadingMessage}>Loading...</p> :
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        }
      </>
    }
    />
    <Route path="/new" element={
        <h1>New Todo List</h1>
    }
    />
  </Routes>
</BrowserRouter>
</div>
);
}
export default App; 