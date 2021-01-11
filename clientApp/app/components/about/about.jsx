import React from 'react';
import Navigation from '../../components/common/navigation';
import Footer from '../../components/common/footer';

export default class about extends React.Component {

    constructor(){
        super();
    }

    render(){
        return(
            <React.Fragment>
                <Navigation />
                <header id="gtco-header" className="gtco-cover gtco-cover-sm" role="banner" style={{backgroundImage: 'url(./assets/images/img_bg_3.jpg)'}}>
                    <div className="overlay"></div>
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 text-left">
                                <div className="row row-mt-15em">
                                    <div className="col-md-7 mt-text">
                                        <span className="intro-text-small">FlightBook</span>
                                        <h1>About us</h1>	
                                    </div>                                    
                                </div>                                
                            </div>
                        </div>
                    </div>
                </header>
                <div className="gtco-section border-bottom">
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <h3>About us</h3>
                                    <p>
                                        FlightBooking is an new start-up flight search and booking site. We are here to make flight booking as easy and 
                                        hassle-free as possible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }

}