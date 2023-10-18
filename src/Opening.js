import cityBuilding from './static/images/city-buildings.jpg'

function Opening(){
    return(
        <section className="Opening-section" id="home">
        <img src={cityBuilding} className="Opening-img"></img>
            <div className="Opening-left-sep">
                <h1>City Law Firm</h1>
                <p>Intellectual Property Law & Business Law,</p>
                <p> Litigation & Dispute Resolution</p>
            </div>
        </section>
    )
}


export default Opening;
