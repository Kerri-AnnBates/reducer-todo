import React, {useState, useReducer} from 'react';
import {initialValue, reducer} from '../reducers/todoReducer';
import Todo from './Todo';

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    console.log(state)

    return (
        <div>
            {state.map(item => (
                <Todo key={item.id} todo={item} />
            ))}
        </div>
    )
}

export default TodoList;