import React from "react"; // Import React from "react" npm package

function TodoListItem({ todo, onRemoveTodo }) { 
    return (     
        <li>
            {todo.title}
            <button 
                type="button" 
                onClick={() => onRemoveTodo(todo.id)}
            >
                Remove
            </button>
        </li>
    );
}
export default TodoListItem;// Export TodoListItem function as the default module