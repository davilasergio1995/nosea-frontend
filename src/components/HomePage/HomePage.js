import './HomePage.css';
import NavBar from '../NavBar/NavBar'
import ChatClient from '../ChatClient/ChatClient';

//Simple splash page, used to apply redirection to project. 
let HomePage = () => {
    if (sessionStorage.length !== 0) {
        return (
            <div>
                <NavBar></NavBar>
                <p className='homepage_blurb'>Welcome {sessionStorage.getItem('username').toLowerCase()}!</p>
                <ChatClient/>
            </div>
        )
    } else if (localStorage.length !== 0) {
        return (
            <div>
                <NavBar></NavBar>
                <p className='homepage_blurb'>Welcome {localStorage.getItem('username').toLowerCase()}!</p>
                <ChatClient/>
            </div>
        )
    } else {
        return (
            <div>
                <NavBar></NavBar>
                <p className='homepage_blurb'>Hello! Please log in to continue</p>
            </div>
        )
    }
};

export default HomePage;

//