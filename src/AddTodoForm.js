import React, { useState } from "react"; 
import InputWithLabel from './InputWithLabel';
import styles from './AddTodoForm.module.css';

function AddTodoForm( { onAddTodo }) { 
    const [todoTitle, setTodoTitle] = useState(""); // Create a new state variable named todoTitle with a setter setTodoTitle

    function handleTitleChange(event) { // Declare a new function named handleTitleChange that takes event as a parameter 
        const newTodoTitle = event.target.value; // Retrieve the input value from the event object
        setTodoTitle(newTodoTitle); // Call the state setter setTodoTitle and pass newTodoTitle
    }

    function handleAddTodo(event) { //Create a new function called handleAddTodo that takes event as a parameter 
        event.preventDefault(); //Prevent the default behavior of the form submit 
        console.log("value is", todoTitle); //Log the value of todoTitle in the console
        const todoItem = {
            title: todoTitle,
            id: Date.now()
        };
        onAddTodo(todoItem); // Update the onAddTodo callback prop to pass an Object instead of a String
        setTodoTitle(""); // Remove the reset() method and replace it with logic to reset the todoTitle state to an empty String
    }
    return ( //Add a multi-line return statement to your AddTodoForm function//
    <form className={styles.todoForm} onSubmit={handleAddTodo}> {/*Create a <form> element + Add onSubmit prop to <form> element and pass the handleAddTodo function by reference*/}
      <InputWithLabel 
        htmlFor="todoTitle" 
        inputName="title" 
        inputValue={todoTitle} 
        onChange={handleTitleChange}
        autoFocus={true} // Add autoFocus prop to input element
      >
        Title: 
      </InputWithLabel>
    <button type="submit" className={styles.addButton}>Add</button> {/*Create a submit <button> element with text "Add"*/}
    </form>
    );
}
export default AddTodoForm;