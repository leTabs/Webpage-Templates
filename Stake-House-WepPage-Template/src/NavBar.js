import Profile from './imgs/user-regular.svg'

function NavBar(){
    return(
        <nav className="NavBar">
            <span>Home</span>
            <span>Menu</span>
            <span>Reservations</span>
            <span>Restaurants</span>
            <span>Order Now</span>
            <span>
                <img src={Profile} />
                {/* <p>Log In</p> */}
            </span>
        </nav>
    )
};

export default NavBar;
