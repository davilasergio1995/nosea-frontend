import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Message from '../Message/Message';
import TextBox from '../TextBox/TextBox'

const ChatGen = (props) => {

let [messages, setMessages] = useState([]);

    useEffect(() => {
        Axios.get('/api/chatLogs/').then((response) => {
        setMessages(response.data);
        }).catch(err => console.log(err));
        
    },);

    let chatMap = messages.map(e => <Message key = {e.messageId} username={e.userName} message={e.messageContent}></Message>)
    return(
      <div>
        <div>{chatMap}</div>
        <TextBox/>
      </div>

    )
};

export default ChatGen;

