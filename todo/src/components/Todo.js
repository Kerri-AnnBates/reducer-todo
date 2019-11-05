import React from 'react';

const Todo = (props) => {
    const {todo} = props;

    const handleToggle = () => {
        console.log('toggled.');
    }

    return (
        <div onClick={handleToggle} className={todo.completed ? 'completed' : ''}>{todo.title}</div>
    )
}

export default Todo;