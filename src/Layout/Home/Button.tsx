import React from 'react';


interface Myprops{
    text : string,
    onClick?: () => void
}


const Button:React.FC <Myprops> = (props) => {
    return (
        <div>
            <button className='border-2 rounded-md p-2' onClick = {props.onClick}>{props.text}</button>
        </div>
    );
};




export default Button;