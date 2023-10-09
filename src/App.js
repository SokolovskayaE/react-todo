import React from 'react';

// Create array and store it in a variable named todoList
const todoList = [
{id:1,title: "Coding Assignment" },
{id:2,title: "Mindset Assignment" },
{id:3,title: "Mentor Assignment" },
];

function App() {
return (
<div>

{/*Create a level-one heading that says "Todo List"*/}
<h1> Todo List </h1>

{/*Create an unordered list (<ul>)*/}
<ul> 
{todoList.map(function (item){
return <li key={item.id}>{item.title}</li>;
})}
</ul>

</div>
);
}
export default App;