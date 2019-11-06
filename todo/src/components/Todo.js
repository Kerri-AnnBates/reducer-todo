import React from 'react';
import '../App.css';

const Todo = (props) => {
    const { todo, handleToggle} = props;

    return (
        <div onClick={() => handleToggle(todo.id)} className={todo.completed ? 'completed' : ''}>{todo.title}</div>
    )
}

export default Todo;