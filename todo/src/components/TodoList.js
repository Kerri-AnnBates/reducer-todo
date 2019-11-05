import React, {useState, useReducer} from 'react';
import {initialValue, reducer} from '../reducers/todoReducer';

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    console.log(state)

    return (
        <div>
            
        </div>
    )
}

export default TodoList;