import React, {useState} from 'react';
import Axios from 'axios';
import './ChatTextBox.css';

//Submits text from text box into the .JSON file/database

let ChatTextBox = () => {
    const [text, setText] = useState('');

//Message ID hash function. Not needed, will replace with simple incrementing function.    
    let idGen = (messageContent, seed = (Math.random())) => {
        let hash = 0;
        
        for (let i=0; i<messageContent.length; i++) {
            hash += messageContent.charCodeAt(i);
        }
        return (100000000 - (Math.floor(hash / seed) * 100));
    };

//Sends server a POST request, appending chat.json file in database with new chat message. (Bugged, after first 1-3 POST requests
//a 500 server error gets thrown, need to debug to continue). Will reformat to send individual user messages instead of a hard coded
//user's messages.
    let chatSubmit = (e) => {
        let postURL = '/api/mainchatpost';
        e.preventDefault();
        if (text === '') {
            return;
        };
        if (sessionStorage.length !== 0) {
            
            Axios.post(postURL, {
                message: {
                    username: sessionStorage.getItem('username'),
                    messageId: idGen(text),
                    messageContent: text},
                    headers: {
                        'authorization': `Bearer ${sessionStorage.getItem('userAccessToken')}`
                }
            }).catch(err => console.log(err));
            setText('');
        } else if (localStorage.length !== 0) {
            Axios.post(postURL, {
                message: { 
                username: localStorage.getItem('username'),
                messageId: idGen(text),
                messageContent: text,},
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('userAccessToken')}`
                }
            }).catch(err => console.log(err));
            setText('');
        }
        
    }
    
    return(
        <form>
            <input className='textBox' type='text' value={text} onChange={(e) => setText(e.target.value)}/>
            <button className='chat_button' onClick={chatSubmit}></button>
        </form>
    )
    
};

export default ChatTextBox;