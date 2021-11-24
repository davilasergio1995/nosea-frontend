import ChatGen from '../ChatGen/ChatGen';
import ChatContainer from '../ChatContainer/ChatContainer';
import ChatTextBox from '../ChatTextBox/ChatTextBox';
import './ChatClient.css';



//Component contains every relevant component that makes up the chat client present in the bottom right corner of a user's screen.
//Each component rendered explained in invidiaul component's file.
let ChatClient = () => {
    return (
    <span>
       <ChatContainer>
         <ChatGen/>
         <ChatTextBox/>  
       </ChatContainer>
       
       
    </span>  
      ); 
}

export default ChatClient;