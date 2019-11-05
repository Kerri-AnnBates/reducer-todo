import React from 'react';

const Todo = (props) => {
    const {todo} = props;
    return (
        <div>{todo.title}</div>
    )
}

export default Todo;