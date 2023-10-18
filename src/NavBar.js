import scale from './static/images/scale.svg';

function NavBar(){
    return(
        <nav className="NavBar-nav">
            <div className="NavBar-logo-name">
                <img src={scale} className="NavBar-img" alt="logo" ></img> 
                <a href="#home">GRANGER & ANDERSON</a>
            </div>
            
            {/*  */}

            <div className="NavBar-anchors">
                <a href="#home">HOME</a>
                <a href="#practices">PRACTICES</a>
                <a href="#about">ABOUT</a>
                <a href="#attorneys">ATTORNYES</a>
                <a href="#contact">CONTACT</a>
            </div>
        </nav>
    )
}

export default NavBar;
