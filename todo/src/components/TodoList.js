import React, { useReducer} from 'react';
import {initialValue, reducer} from '../reducers/todoReducer';
import Todo from './Todo';
import AddForm from './AddForm';

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    
    console.log(state)

    const handleToggle = (id) => {
        // console.log('toggled.', id);
       dispatch({type: 'TOGGLE_ITEM', payload: id});
    }

    const handleClear = () => {
        console.log('clicked');
        dispatch({type: 'CLEAR_COMPLETED'});
    }

    return (
        <div>
            {state.map(item => (
                <Todo 
                    key={item.id} 
                    todo={item} 
                    handleToggle={handleToggle} 
                />
            ))}
            <AddForm dispatch={dispatch} />
            <button onClick={handleClear}>Clear Completed</button>
        </div>
    )
}

export default TodoList;