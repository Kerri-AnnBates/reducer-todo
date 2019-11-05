import React from 'react';

export const initialValue = [
    {
        title: 'Practice code',
        completed: false,
        id: 1
    }, 
    {
        title: 'Cook dinner',
        completed: false,
        id: 2
    },
    {
        title: 'Wash car',
        completed: false,
        id: 3
    },
    {
        title: 'Give Yoshi a bath',
        completed: false,
        id: 4
    },
]

export const reducer = (state) => {
    return {...state, todo: 'new todo'}
}