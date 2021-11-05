import ChatClient from './components/ChatClient/ChatClient';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
function App() {

  return (
  <Router>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/nosea' component={ChatClient}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/signup' component={Signup}/>
  </Router>
  );
  
};
  
  
export default App;
