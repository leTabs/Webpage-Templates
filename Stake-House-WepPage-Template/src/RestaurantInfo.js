import facebookIcon from './imgs/facebook.svg'
import instagramIcon from './imgs/instagram.svg'
import yelpIcon from './imgs/yelp.svg'

function RestaurantInfo(){
    return(
        <section className="RestaurantInfo">
            <h2>Our Restaurant</h2>
            <div className="RestaurantInfo-main-wrapper">
                <span className="RestaurantInfo-info">
                    <span className="RestaurantInfo-info-inner-wrapper">
                        <p>Address: <br />
                            <span className='RestaurantInfo-info-address'>
                            500 Terry Francine St.
                            San Francisco, CA 94158</span>
                        </p>
                        <p>Tel: <span>000 000 0000</span></p>
                        <p>Email: <span>example@gmail.com</span></p>
                    </span>
                    <span className="RestaurantInfo-socials-wrapper">
                        <img src={facebookIcon}></img>
                        <img src={instagramIcon}></img>
                        <img src={yelpIcon}></img>
                    </span>
                </span>
                <span className="RestaurantInfo-schedule">
                    <h3>We are Open:</h3>
                    <span className="RestaurantInfo-schedule-inner-wrapper">
                        <span>
                            <p>day</p>
                            <p>hours</p>
                        </span>
                        <span>
                            <p>day</p>
                            <p>hours</p>
                        </span>
                        <span>
                            <p>day</p>
                            <p>hours</p>
                        </span>
                    </span>
                </span>

            </div>
        </section>
    )
}

export default RestaurantInfo;
