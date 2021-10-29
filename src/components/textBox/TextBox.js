import React, {useState} from 'react';
import Axios from 'axios';

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
        Axios.post('/api/chatLogs', {
            userName: "Snowhopfirado",
            userId: "42069",
            messageId: idGen(text),
            messageContent: text
        });
        setText('');
    }
    
    return(
        <form>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={chatSubmit}></button>
        </form>
    )
    
};

export default TextBox;