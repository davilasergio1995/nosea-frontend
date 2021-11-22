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
    const [stayLoggedIn, setStayLoggedIn] = useState(false);

    
    const usernameHandler = (e) => {
        setUsername(e.target.value.toUpperCase());
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

    const check = () => {
        setStayLoggedIn(!stayLoggedIn);
    }

//POST request to server compares the login form data with the username/password database. If successful, redirect to the chat client.
    const login = (e) => {
        let userAccessToken;
        e.preventDefault();
        Axios.post('/api/users/login',{
            username: username,
            password: password
        }).then((response) => {
            if (response.data === 'no user') {
                alert('User doesn\'t exist')
            } else if (response.data === 'no password') {
                alert('Incorrect password');
            } else {
                userAccessToken = response.data.accessToken;
                if (stayLoggedIn) {
                    localStorage.setItem('userAccessToken',userAccessToken);
                    localStorage.setItem('username',username);
                    alert('Signin successful!');
                    history.push('/');
                } else {
                    sessionStorage.setItem('userAccessToken',userAccessToken);
                    sessionStorage.setItem('username',username);
                    alert('Signin successful!');
                    history.push(`/`);
                }
            };

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
                <div className = 'input'>
                    <input id='localSession' type='checkbox' onClick={check}></input>
                    <label htmlFor='localSession'>Stay logged in</label>
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