import React, { useState } from 'react';
import { useDetails } from '../Provider/PersonHook';

const Contact:React.FC = () => {

    const [value, setValue] = useState<string | undefined>();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
       setValue(e.target.value)
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const details = useDetails();

    console.log(details.name)
    console.log(details.roll)


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type = "text" placeholder='Enter something' className='mb-10 mt-10'/>
            <button type = "submit">Submit</button>
            </form>
            <br/>
            {value}
        </div>
    );
};

export default Contact;