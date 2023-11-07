import BackgroungImg from './imgs/main-bg-menu.jpg'

function Menu(){
    return(
        <section className='Menu'>
            <img src={BackgroungImg}></img>
            <div className='Menu-div-01'>
                <h3>Day's Specials</h3>
                <p>See Today's Menu</p>
            </div>
            <div className='Menu-div-02'>
                <h3>Delicious Food</h3>
                <p>See Full Menu</p>
            </div>
        </section> 
    )
}

export default Menu;
