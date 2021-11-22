import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Message from '../Message/Message';
import ChatTextBox from '../ChatTextBox/ChatTextBox'

//Maps each message into a div from the messages state. TextBox rendered under messages, allowing proper placement of the text box
const ChatGen = (props) => {

let [messages, setMessages] = useState([]);


//useEffect sends a GET request to the server, obtains the chat logs for a particular user, then sets the messages into the messages state using setMessages
//called every time the state is rendered to update messages in real time. (bugged, GET request breaks after 1-3 POST requests from other component)
    useEffect(() => {
        if (sessionStorage.length !== 0) {
          let sessionToken = sessionStorage.getItem('userAccessToken');
          Axios.post('/api/mainchatget/',{
            headers: {
              'authorization': `Bearer ${sessionToken}`
            }
          }).then((response) => {
            setMessages(response.data);  
            }).catch(err => console.log(err));
        } else if (localStorage.length !== 0) {
          Axios.post('/api/mainchatget/',{

            headers: {
                'authorization': `Bearer ${localStorage.getItem('userAccessToken')}`
            }
        }).then((response) => {
            setMessages(response.data);
            }).catch(err => console.log(err));
        }
        
    },);

//chatMap function maps Message components here, keeping the App component lean. Passes data to Message component using props.
let chatMap = messages.map(e => <Message key = {e.messageId} username={e.username} message={e.messageContent}></Message>)
    return(
      <div>
        <div>{chatMap}</div>
        <ChatTextBox/>
      </div>

    )
};

export default ChatGen;

