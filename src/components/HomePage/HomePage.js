import './HomePage.css';
import NavBar from '../NavBar/NavBar'

//Simple splash page, used to apply redirection to project. 
let HomePage = () => {
    return(
        <div>
            <NavBar></NavBar>
            <p className='homepage_blurb'>This is my homepage! click the "login" button in the navbar to login.</p>
        </div>

    )
};

export default HomePage;