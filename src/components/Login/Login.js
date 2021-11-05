import NavBar from '../NavBar/NavBar';
import {useState} from 'react';
import './Login.css';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

let Login = () => {
    const history = useHistory();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const usernameHandler = (e) => {
        setUsername(e.target.value.toUpperCase());
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

    const login = (e) => {
        e.preventDefault();
        Axios.post('/api/users',{
            username: username,
            password: password
        }).then((response) => {
            if (response.data === 'yes') {
                history.push('/nosea');
            } else {
                alert('Incorrect username and/or password');
            }
        })
    }

    return(
        <div>
            <NavBar/>
            <form className='username-and-password'>
                <div className='input'>
                    <label htmlFor='username'>Username:</label>
                    <input id='username' type='text' placeholder='Username' onChange={usernameHandler}></input>
                </div>
                <div className = 'input'>
                    <label htmlFor='passord'>Password: </label>
                    <input id='password' type='text' placeholder='Password' onChange={passwordHandler}></input>
                </div>
                <button onClick={login}></button>    
            </form>
        </div>
    )
};

export default Login;