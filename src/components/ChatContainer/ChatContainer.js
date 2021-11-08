import './ChatContainer.css';


//Container for messages/text box that make up client. Admittedly unnecessary, mainly used to practice/utilize props.children
//(props.children allows user to pass content between opening and closing tags when tags are custom components, used here to pass styling and to keep the chat client together)
let ChatContainer = (props) => {
    const classes = 'chat_container ' + props.className;
    
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
};

export default ChatContainer;