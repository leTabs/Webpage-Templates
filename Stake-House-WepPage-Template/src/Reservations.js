function Reservations(){
    return(
        <section className="Reservations">
            <h2>MAKE RESERVATIONS</h2>
            <form className="Reservations-form">

                <label for="party-size">Party Size:</label>
                <label for="date-selector">Date:</label>
                <label for="time-selector">Time:</label>
                <select id="party-size">
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                    <option value="6">6 guests</option>
                    <option value="8">8 guests</option>
                </select>

                <input type="date" id="date-selector" name="datePicker"></input>

                <select id="time-selector">
                    <option value="">6:00 PM</option>
                    <option value="">6:00 PM</option>
                    <option value="">6:00 PM</option>
                    <option value="">6:00 PM</option>
                    <option value="">6:00 PM</option>
                </select>
                <button type="submit">Hold Table</button>
            </form>
            <span className="Reservations-text-content">
                <h3>Considerations</h3>
                <p>
                    We also host events etc etc etc
                    We also host events etc etc etc
                    We also host events etc etc etc
                    We also host events etc etc etc
                    We also host events etc etc etc
                </p>
            </span>
        </section>
    )
}

export default Reservations;
