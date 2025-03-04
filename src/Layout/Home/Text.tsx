import React from 'react';
interface MyProps{
    text: string,
    num ?: number
 }
const Text:React.FC<MyProps> = (pro) => {
    
    return (
        <div>
            Language is : {pro.text} <br/>
            Number is : <>{pro.num}</>
        </div>
    );
};

export default Text;