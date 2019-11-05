import React, { useReducer} from 'react';
import {initialValue, reducer} from '../reducers/todoReducer';
import Todo from './Todo';
import AddForm from './AddForm';

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    
    console.log(state)

    return (
        <div>
            {state.map(item => (
                <Todo key={item.id} todo={item} />
            ))}
            <AddForm dispatch={dispatch} />
        </div>
    )
}

export default TodoList;