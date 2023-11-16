import React, { useState } from "react"; // Import React from "react" npm package

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
    <form onSubmit={handleAddTodo}> {/*Create a <form> element + Add onSubmit prop to <form> element and pass the handleAddTodo function by reference*/}
        <label htmlFor="todoTitle">Title:</label> {/*Add htmlFor attribute to <label> element with id "todoTitle"*/}
        <input id="todoTitle" type="text" name="title" value={todoTitle} onChange={handleTitleChange}/> {/*Create a text <input> element with id "todoTitle" + Add a name attribute to the text input with value title + Add value prop equal to todoTitle from component props*/}
        <button type="submit">Add</button> {/*Create a submit <button> element with text "Add"*/}
    </form>
    );
}
export default AddTodoForm; // Export AddTodoForm function as the default module