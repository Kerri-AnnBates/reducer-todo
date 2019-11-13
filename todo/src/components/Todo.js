import React from 'react';
import '../App.css';
import styled from 'styled-components';

const Item = styled.div`
    padding: 10px 0;
    background-color: #E1E2E3;
    border-bottom: 1px solid #B2B9BD;
    

    &:hover {
        cursor: pointer;
    }
`

const Todo = (props) => {
    const { todo, handleToggle} = props;

    return (
        <Item onClick={() => handleToggle(todo.id)} className={todo.completed ? 'completed' : ''}>{todo.title}</Item>
    )
}

export default Todo;