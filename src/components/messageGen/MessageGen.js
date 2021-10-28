import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Message from '../Message/Message';

const MessageGen = (props) => {

let [messages, setMessages] = useState([]);

    useEffect(() => {
        Axios.get('/api/chatLogs').then((response) => {
        setMessages(response.data);
        })
    }, []);

    let chatMap = messages.map(e => <Message key = {e.messageId} username={e.userName} message={e.messageContent}></Message>);

    return(
      <div>{chatMap}</div>
    )
};

export default MessageGen;

