import ChatGen from '../ChatGen/ChatGen';
import ChatContainer from '../ChatContainer/ChatContainer';
import './ChatClient.css';



//Component contains every relevant component that makes up the chat client present in the bottom right corner of a user's screen.
//Each component rendered explained in invidiaul component's file.
let ChatClient = (props) => {
    return (
    <span>
       <ChatContainer>  
        <ChatGen/>
       </ChatContainer>
    </span>  
      ); 
}

export default ChatClient;