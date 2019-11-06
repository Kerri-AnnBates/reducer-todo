import React, {useState} from 'react';
import styled from 'styled-components';

const Form = styled.form`
    margin: 20px 0;
`

const FormInput = styled.input`
    border-radius: 5px;
    border: 2px solid #80688B;
    padding: 5px 10px;
`

const AddButton = styled.button`
    padding: 5px 10px;
    margin-left: 5px;
    border-radius: 5px;
    background: #FB9833;
`

const AddForm = (props) => {
    const {dispatch} = props;
    // console.log(dispatch);
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            title: value,
            completed: false,
            id: Date.now()
        }
        dispatch({type: 'ADD_ITEM', payload: newTodo});
        // console.log("submited: ", value);
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FormInput type="text" placeholder="Add Todo" onChange={handleChange} value={value} />
                <AddButton>Add</AddButton>
            </Form>
        </>
    )
}

export default AddForm;
