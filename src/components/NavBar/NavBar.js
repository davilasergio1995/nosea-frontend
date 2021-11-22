import './NavBar.css';
import {useHistory} from 'react-router-dom';

//Navbar component, used in any rendered component. Currenly simple with only a login link that sends user to the login screen
//(Login component). Will feature more usability in the future.
let NavBar = () => {
    const history = useHistory();
    const signOut = () => {
        let signOutConfirm = window.confirm('Are you sure you want to sign out?');
        if (signOutConfirm === true) {
            localStorage.clear();
            sessionStorage.clear();
            history.push('/');
        } else if (signOutConfirm === false) {
            return;
        };
    };
    
    if (sessionStorage.length !== 0) {
        return(
            <div className='navbar'>
                <p>{sessionStorage.getItem('username').toLowerCase()}</p>
                <button className='navbar_button' onClick={signOut}>Sign Out</button>
            </div>
        )
    } else if (localStorage.length !== 0) {
        return(
            <div className='navbar'>
                <p>{localStorage.getItem('username').toLowerCase()}</p>
                <button className='navbar_button' onClick={signOut}>Sign Out</button>
            </div>
        );
    } else {
        return(
            <div className='navbar'>
                <a href="/login" className = 'navbar_button'>
                    Login
                </a>
                <a href="/" className = 'navbar_button'>
                    Home
                </a>
            </div>
        )
    }
};

export default NavBar;