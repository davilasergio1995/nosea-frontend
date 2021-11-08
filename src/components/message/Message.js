import React from 'react';
import './message.css';

//Simple component, takes in info using props from the ChatGen component.
let Message = (props) => {

    return(
        <div className='message' key={props.key}>
            <p>{props.username}: </p>
            <p>{props.message}</p>
        </div>
    )
};

export default Message;