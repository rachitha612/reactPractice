import React from 'react';
import '../App.css';
import TodoItem from './todoItem';
function MainComponent(){
    return (
        <main className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </main>
    );
}

export default MainComponent;