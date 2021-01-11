import React from 'react';

export default class footer extends React.Component {

    constructor(props){
        super();
    }

    render(){
        return(
            <footer id="gtco-footer" role="contentinfo">
                <div className="gtco-container">
                    <div className="row row-p b-md">
                        <div className="col-md-4">
                            <div className="gtco-widget">
                                <h3>About Us</h3>
                                <p>FlightBooking is an new start-up flight search and booking site. We are here to make flight booking as easy and 
                                    hassle-free as possible.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-md-push-1">
                            <div className="gtco-widget">
                                <h3>Get In Touch</h3>
                                <ul className="gtco-quick-contact">
                                    <li><a href="tel:+6567777777"><i className="icon-phone"></i>+65 6777 7777</a></li>
                                    <li><a href="mailto:info@flightbooking.com"><i className="icon-mail2"></i>info@flightbook.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row copyright">
                        <div className="col-md-12">
                            <p className="pull-left">
                                <small className="block">&copy; 2020 FlightBooking Co. All Rights Reserved.</small> 
                            </p>
                            <p className="pull-right">
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}