import NavBar from '../NavBar/NavBar';
import {useState} from 'react';
import './Login.css';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

//Login component, extremely important 
let Login = () => {
//useHistory allows redirection on a successful login    
    const history = useHistory();

//separate useStates from the login form
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const usernameHandler = (e) => {
        setUsername(e.target.value.toUpperCase());
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

//POST request to server compares the login form data with the username/password database. If successful, redirect to the chat client.
//(Currently extremely insecure, server-side libraries will be implemented for security)
    const login = (e) => {
        e.preventDefault();
        Axios.post('/api/users/login',{
            username: username,
            password: password
        }).then((response) => {
            if (response.data === 'a-ok') {
                alert('Login successful!')
            } else {
                alert(response.data);
            }
        })
    };

//Simple form, sets the username and password states that are used to compare to the database
    return(
        <div>
            <NavBar/>
            <form className='username-and-password'>
                <div className='input'>
                    <label htmlFor='username'>Username: </label>
                    <input id='username' type='text' placeholder='Username' onChange={usernameHandler}></input>
                </div>
                <div className = 'input'>
                    <label htmlFor='passord'>Password: </label>
                    <input id='password' type='password' placeholder='Password' onChange={passwordHandler}></input>
                </div>
                <button onClick={login} className='input_button'>Login</button>    
            </form>
            <div className = 'signup'>
                <div>Not registered?</div>
                <a href = "/signup">Sign up!</a>
            </div>
        </div>
    )
};

export default Login;