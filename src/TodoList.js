import React from "react"; // Import React from "react" npm package

// Create array and store it in a variable named todoList
const todoList = [
    {id:1,title: "Coding Assignment" },
    {id:2,title: "Mindset Assignment" },
    {id:3,title: "Mentor Session" },
    {id:4,title: "Mentor Assignment" },
    {id:5,title: "Group Session" },
    ];

// Declare a function named TodoList
function TodoList() {
  // Add a multi-line return statement with JSX
    return (
// Create an unordered list (<ul>)//
<ul> 
{todoList.map(function (item){
return <li key={item.id}>{item.title}</li>;
})}
</ul>
    );
}

export default TodoList;// Export TodoList function as the default module