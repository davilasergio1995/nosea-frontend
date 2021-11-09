import './NavBar.css'

//Navbar component, used in any rendered component. Currenly simple with only a login link that sends user to the login screen
//(Login component). Will feature more usability in the future.
let NavBar = () => {
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
};

export default NavBar;