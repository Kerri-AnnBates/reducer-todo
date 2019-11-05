import React, {useState} from 'react';

const AddForm = () => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <>
            <form>
                <input type="text" placeholder="Add Todo" onChange={handleChange} value={value} />
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default AddForm;
