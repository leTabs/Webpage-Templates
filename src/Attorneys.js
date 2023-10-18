import Harvey from './static/images/harvey.jpg'
import Ross from './static/images/ross.png'
import Jessica from './static/images/Jessica.jpg'
function Attorneys(){
    return(
        <section className="Attorneys-section" id="attorneys">
            <h2>OYR ATTORNEYS</h2>
            <div className="Attorneys-main-div">

                <div className="Attorneys-inner-div">
                    <img src={Jessica} alt="Attorney 01 photograph" />
                    <p>
                        <span className='Attorneys-name'>JESSICA PEARSON</span>
                        <span className='Attorneys-rank'>SENIOR PARTNER</span>
                        <hr />
                        <span className='Attorneys-phone'>Tel: 000-000-0000</span>
                        <span className='Attorneys-email'>example@gmail.com</span>
                    </p>
                </div>
{/*  */}
                <div className="Attorneys-inner-div">
                    <img src={Harvey} alt="Attorney 02 photograph" />
                    <p>
                        <span className='Attorneys-name'>HARVEY SPECTER</span>
                        <span className='Attorneys-rank'>SENIOR PARTNER</span>
                        <hr />
                        <span className='Attorneys-phone'>Tel: 000-000-0000</span>
                        <span className='Attorneys-email'>example@gmail.com</span>
                    </p>
                </div>
{/*  */}
                <div className="Attorneys-inner-div">
                    <img src={Ross} alt="Attorney 03 photograph" />
                    <p>
                        <span className='Attorneys-name'>MAIK ROSS</span>
                        <span className='Attorneys-rank'>JUNIOR PARTNER</span>
                        <hr />
                        <span className='Attorneys-phone'>Tel: 000-000-0000</span>
                        <span className='Attorneys-email'>example@gmail.com</span>
                    </p>
                </div>

                {/*  */}


            </div>
        </section>
    )
}

export default Attorneys;
