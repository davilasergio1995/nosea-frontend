import React, {useState} from 'react';

let TextBox = (props) => {
    const [text, setText] = useState('');

    return (
        <div>
            <input></input>
            <button></button>
        </div>
    )
};

export default TextBox;