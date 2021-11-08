import ChatGen from '../ChatGen/ChatGen';
import ChatContainer from '../ChatContainer/ChatContainer'
import NavBar from '../NavBar/NavBar';



//Component contains every relevant component that makes up the chat client present in the bottom right corner of a user's screen.
//Each component rendered explained in invidiaul component's file.
//(Note: NavBar renders the navigation bar present on the top of the user's screen. NavBar is a components present in any component that has a route in App.js)
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