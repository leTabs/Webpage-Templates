function Contact(){
    return(
        <section className="Contact-section" id="contact">
            <h2>Contact Our Offices</h2>
            <div className="Contact-general-div">
                <div className="Contact-general-info">
                    <p className="Contact-important-text">
                        <span className="Contact-address">Out Address :</span>
                        <span className="Contact-address-content">500 Terry Francine St. San Francisco, CA 94158</span>
                        <span className="Contact-email">Email :</span>
                        <span className="Contact-email-content">example@gmail.com</span> <br />
                        <span className="Contact-phone">Tel:</span>
                        <span className="Contact-phone-content">000-000-0000</span>
                        <span className="Contact-map-dir">Find us on the <a href="">map</a></span>
                    </p>
                </div>
                <form action="" methods="POST" className="Contact-form">
                    <div className="Contact-form-content">
                        <div className="Contact-form-personal-info">
                            <label for="first-name">First Name*</label>
                            <input type="text" id="first-name" required/>

                            <label for="last-name">Last Name*</label>
                            <input type="text" id="last-name" required/>

                            <label for="mai">Email*</label>
                            <input type="email" id="mail" required />

                            <label for="subject">Subject *</label>
                            <input type="text" id="subject" required/>
                        </div>
                        <div className="Contact-form-message">
                            <label for="message">Message*</label>
                            <textarea id="message" rows="8" cols="20"></textarea>
                        </div>
                    </div>

                    <button type="submit" className="Contact-submit-btn">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
