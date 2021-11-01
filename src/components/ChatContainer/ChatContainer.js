import './ChatContainer.css';

let ChatContainer = (props) => {
    const classes = 'chat_container ' + props.className;
    
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
};

export default ChatContainer;