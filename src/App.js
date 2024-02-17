import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from "./components/TodoList"; 
import AddTodoForm from "./components/AddTodoForm"; 
import styles from "./App.module.css";
import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';

function App() {
    const [todoList, setTodoList] = useState([]); // Create a new state variable named todoList with setter setTodoList
    const [isLoading, setIsLoading] = useState (true); // create a new state variable named isLoading with update function named setIsLoading with default value true
    const [sortOrder, setSortOrder] = useState('asc'); // Initialize sort order state

const fetchData = useCallback(async() => { // Create a new async function fetchData
const sortDirection = sortOrder === 'asc' ? 'asc' : 'desc';  
const options = { // Inside the fetchData function, declare an empty object variable named options
    method: "GET", // Add a method key with the value 'GET'
    headers: { Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=${sortDirection}`;

    try {
    const response = await fetch(url, options)
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
}, [sortOrder]); 

const toggleSortOrder = () => { // Toggle sort order between 'asc' and 'desc'
  const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
  setSortOrder(newSortOrder);
 };
useEffect(() => { // Update the todo list when sortOrder changes
  fetchData();
}, [fetchData]); 

const addTodo = async (newTodo) => { // Add a newTodo
    const airtableData = {
      fields: {
        title: newTodo.title,
      },
    };
   const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;
   const options = { // Add a method key with the value 'POST'
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify(airtableData),
    };
    try {
       const response = await fetch(url, options); // Send a POST request to add a new todo
        if (!response.ok) { // Check if the response is not successful
        const message = `Error adding todo: ${response.status}`;
        throw new Error(message);
      }
      const addedTodo = await response.json();
      setTodoList([...todoList, { id: addedTodo.id, title: addedTodo.fields.title }]);
      } catch (error) {
      console.log('Error fetching data:', error.message);
      return null;
    }
  }
    useEffect(() => { // Define a useEffect React hook with todoList as a dependency.
        if (!isLoading) {
        localStorage.setItem('savedTodoList', JSON.stringify(todoList)); //Inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList" + Convert todoList to a string before saving in localStorage
        }
    }, [todoList, isLoading]); // Dependency array with todoList

  const deleteTodo = async (id) => { // Delete a todo by its ID from Airtable
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`;
  const options = { // Define access credentials for DELETE request
    method: 'DELETE',
    headers: {
      "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
    },
  };
  try {
    const response = await fetch(url, options); // Delete the todo item from table
      if (!response.ok) { // Check if the response is not successful
      const message = `Error deleting todo: ${response.status}`;
      throw new Error(message);
    }
    console.log('Todo deleted successfully.');
    return await response.json();
  } catch (error) {
    console.log('Error deleting todo:', error.message)
    return null;
  };
};
const removeTodo = async (id) => { // Remove a todo from the local storage and update ToDoList
  await deleteTodo(id);
  const updatedTodoList = todoList.filter(todo => todo.id !== id);
  setTodoList(updatedTodoList);
};

return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <div >
            <Home />
          </div>
          <Footer />
        </>
      }
      />
      <Route path="/todos" element={
        <>
          <Header />
             <div className={styles.container}>
            <h1 className={styles.header}>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
              <div className={styles.sortButtonContainer}>
              <button onClick={toggleSortOrder} className={styles.sortButton}>Sort Order</button>
              </div>
            {isLoading ? <p className={styles.loadingMessage}>Loading...</p> :
                <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
              }
            </div>
          <Footer />
        </>
      }
      />
    </Routes>
  </BrowserRouter>
);
}

export default App;