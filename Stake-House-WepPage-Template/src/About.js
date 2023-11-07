import GrillImg from './imgs/grill.jpg'

function About(){
    return(
        <section className='About'>
            <h2>GET TO KNOW <span>US</span></h2>
            <img src={GrillImg}></img>
            <p>
                Welcome to our extraordinary steakhouse, 
                where sizzling steaks steal the show. 
                We're here to serve you the juiciest, most succulent selections in town. 
                Join us for an unforgettable steak experience that's all about indulgence and flavor.
            </p>
            <hr />
        </section>
    )
}

export default About;
