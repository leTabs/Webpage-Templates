import logoBook from './imgs/book-solid.svg';

function Navigation(){
    return(
        <nav className="Navigation">
            <span className="Navigation-logo">
                <img 
                    src={logoBook} 
                    alt="Image could not load in time."
                    className="Navigation-img"
                    > 
                </img>
                <p>Pages</p>
            </span>
            <span className="Navigation-destinations">
                <p>Home</p>
                <p>About</p>
                <p>Something</p>
                <p>Something</p>
            </span>
        </nav>
    )
}

export default Navigation;
