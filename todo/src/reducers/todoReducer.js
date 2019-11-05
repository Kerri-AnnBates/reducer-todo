import React from 'react';

export const initialValue = [
    {
        title: 'Practice code',
        completed: false,
        id: 1
    }, 
    {
        title: 'Eat something',
        completed: false,
        id: 2
    }
]

export const reducer = (state) => {
    return {...state, todo: 'new todo'}
}