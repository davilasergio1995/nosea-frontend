import React, {useState} from 'react';
import Axios from 'axios';
import './TextBox.css';

//Submits text from text box into the .JSON file/database

let TextBox = () => {
    const [text, setText] = useState('');

    let idGen = (messageContent, seed = (Math.random())) => {
        let hash = 0;
        
        for (let i=0; i<messageContent.length; i++) {
            hash += messageContent.charCodeAt(i);
        }
        return (100000000 - (Math.floor(hash / seed) * 100));
    };

    let chatSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            return;
        }
        Axios.post('/api/chatLogs/', {
            userName: "Snowhopfirado",
            userId: "42069",
            messageId: idGen(text),
            messageContent: text
        }).catch(err => console.log(err));
        setText('');
    }
    
    return(
        <form>
            <input className='textBox' type='text' value={text} onChange={(e) => setText(e.target.value)}/>
            <button className='chat_button' onClick={chatSubmit}></button>
        </form>
    )
    
};

export default TextBox;