import React, { useReducer} from 'react';
import {initialValue, reducer} from '../reducers/todoReducer';
import Todo from './Todo';
import AddForm from './AddForm';
import styled from 'styled-components';

const TodoContainer = styled.div`
    width: 70%;
    margin: auto;
    border-radius: 10px;
    padding: 20px 0;
    background: #fefefe;
`
const ClearButton = styled.button`
    padding: 5px 10px;
    margin-left: 5px;
    border-radius: 5px;
    border: 2px solid #FB9833;
`

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    
    // console.log(state)

    const handleToggle = (id) => {
        // console.log('toggled.', id);
       dispatch({type: 'TOGGLE_ITEM', payload: id});
    }

    const handleClear = () => {
        // console.log('clicked');
        dispatch({type: 'CLEAR_COMPLETED'});
    }

    return (
        <TodoContainer>
            {state.map(item => (
                <Todo 
                    key={item.id} 
                    todo={item} 
                    handleToggle={handleToggle} 
                />
            ))}
            <AddForm dispatch={dispatch} />
            <ClearButton onClick={handleClear}>Clear Completed</ClearButton>
        </TodoContainer>
    )
}

export default TodoList;