import React from "react"; // Import React from "react" npm package

function AddTodoForm(props){ //Add props as a parameter in the AddTodoForm function
    function handleAddTodo(event) { //Create a new function called handleAddTodo that takes event as a parameter 
        event.preventDefault(); //Prevent the default behavior of the form submit 
        const todoTitle = event.target.title.value; //Retrieve the value of the title element from the event target and store it in a variable named todoTitle
        console.log("value is", todoTitle); //Log the value of todoTitle in the console
        props.onAddTodo(todoTitle); //Invoke the onAddTodo callback prop and pass todoTitle as an argument
        event.target.reset(); //Reset the form so the text input value is cleared
    }
    return ( //Add a multi-line return statement to your AddTodoForm function//
    <form onSubmit={handleAddTodo}> {/*Create a <form> element + Add onSubmit prop to <form> element and pass the handleAddTodo function by reference*/}
        <label htmlFor="todoTitle">Title</label> {/*Add htmlFor attribute to <label> element with id "todoTitle"*/}
        <input id="todoTitle" type="text" name="title"/> {/*Create a text <input> element with id "todoTitle" + Add a name attribute to the text input with value title*/}
        <button type="submit">Add</button> {/*Create a submit <button> element with text "Add"*/}
    </form>
    );
}
export default AddTodoForm; // Export AddTodoForm function as the default module