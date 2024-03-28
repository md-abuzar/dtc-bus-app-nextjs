import React from "react";

const Footer = () => { 
    return (
       
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h5>About Us</h5>
                        <hr></hr>
                        <p>The DTC (Delhi Transport Corporation) is one of the most popular, economic and convenient passenger
                            transport bus service offered by Delhi Goverment that manages bus services in Delhi.
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <h5>Address</h5>
                        <hr></hr>
                        <ul className="social-icons">
                            <p>Delhi Transport Corporation (HQ),
                            Government of National Capital Territory of Delhi,
                            I.P. Estate: New Delhi-110002</p>
 
                            <p>Phone: +91-11-23370236</p>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h5>Explore</h5>
                        <hr></hr>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-decoration-none">Home</a></li>
                            <li><a href="/about" className="text-decoration-none">About Us</a></li>
                            <li><a href="/privacy-policy" className="text-decoration-none">Privacy Policy</a></li>
                            <li><a href="/disclaimer" className="text-decoration-none">Disclaimer</a></li>
                            <li><a href="/terms-conditions" className="text-decoration-none">Terms and Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <hr></hr>
                <p className="text-center">© 2024 www.busroute.info. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;