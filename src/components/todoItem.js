import React from 'react';
import '../App.css';

function TodoItem() {
    return(
        <div className = "todo-item">
            <input type="checkbox" />
            <p>Info</p>
        </div>
    );
}

export default TodoItem;