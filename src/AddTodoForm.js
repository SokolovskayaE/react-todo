import React from "react"; // Import React from "react" npm package

function AddTodoForm (){
    //Add a multi-line return statement to your AddTodoForm function//
    return (
    <form> {/*Create a <form> element*/}
        <label htmlFor="todoTitle">Title</label> {/*Add htmlFor attribute to <label> element with id "todoTitle"*/}
        <input id="todoTitle" type="text"/> {/*Create a text <input> element with id "todoTitle"*/}
        <button type="submit">Add</button>  {/*Create a submit <button> element with text "Add"*/}
    </form>
    );
}
export default AddTodoForm; // Export AddTodoForm function as the default module