import ChatClient from './components/ChatClient/ChatClient';
import {Route, Link} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

function App() {

  return (
  <span>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/nosea' component={ChatClient}/>
    
  </span>
  );
  
};
  
  
export default App;
