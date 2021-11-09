import './Signup.css';
import NavBar from '../NavBar/NavBar';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
//Signup page. Currently not programmed, intended to allow new user to sign up.
let Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const history = useHistory();

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };

    const firstNameHandler = (e) => {
        setFirstName(e.target.value);
    };

    const lastNameHandler = (e) => {
        setLastName(e.target.value)
    };

    const formSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: username.toUpperCase(),
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email
        };
        
        Axios.post('/api/users/signup',user)
        .then((response) => {
            if (response.data === 'ok') {
                alert("Signup successful!");
                history.push('/login');
            } else {
                alert(response.data);
            }
        }).catch(err => console.log(err));
        
    }
    
    return(
        <div>
            <NavBar/>
            <form className='signup_form'>
                <div className = 'signup_input'>
                    <label id='firstName'>First Name: </label>
                    <input htmlFor='firstName' type='text' onChange={firstNameHandler}></input>                    
                </div>                      
                <div className = 'signup_input'>
                    <label id='lastName'>Last Name: </label>
                    <input htmlFor='lastName' type='text' onChange={lastNameHandler}></input>                   
                </div >
                <div className = 'signup_input'>
                    <label id='username'>Username: </label>
                    <input htmlFor='username' type='text' onChange={usernameHandler}></input>                    
                </div>
                    <label id='email'>E-mail: </label>
                    <input htmlFor='email' type='email' onChange={emailHandler}></input>                    
                <div className = 'signup_input'>
                    <label id='password'>Password: </label>
                    <input htmlFor='password' type='text' onChange={passwordHandler}></input>                    
                </div >
                <div className = 'signup_input'>
                    <label id='confirmPassword'>Confirm Password: </label>
                    <input htmlFor='confirmPassword' type='text'></input>                    
                </div >
                
                <button onClick={formSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Signup
