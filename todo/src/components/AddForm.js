import React, {useState} from 'react';

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
        console.log("submited: ", value);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add Todo" onChange={handleChange} value={value} />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default AddForm;
