import ChatGen from '../ChatGen/ChatGen';
import ChatContainer from '../ChatContainer/ChatContainer'
import NavBar from '../NavBar/NavBar';


let ChatClient = () => {
    return (
    <span>
       <NavBar/>
       <ChatContainer>  
        <ChatGen/>
       </ChatContainer>
    </span>  
      ); 
}

export default ChatClient;