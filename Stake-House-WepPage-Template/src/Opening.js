import Plates from './imgs/opening-plates.jpg'

function Opening(){
    return(
        <section className="Opening">
            <img src={Plates}></img>
            <div className="Opening-text-div">
                <h2>IN-DOORS <br />STAKE HOUSE</h2>
                <hr />
            </div>
        </section>
    )
}

export default Opening;
