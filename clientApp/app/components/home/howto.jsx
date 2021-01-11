import React from 'react';

export default class howto extends React.Component {

    constructor(props){
        super();
    }

    render(){
        return(
            <div id="gtco-features">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                            <h2>How It Works</h2>
                            <p>Flight Booking made hassle-free in three easy steps</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="feature-center">
                                <span className="icon">
                                    <i>1</i>
                                </span>
                                <h3>Enter Destination</h3>
                                <p>Select your country of departure, followed by your destination.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="feature-center">
                                <span className="icon">
                                    <i>2</i>
                                </span>
                                <h3>Select Dates</h3>
                                <p>Travelling for leisure? Visiting friends and family? Select your travel dates.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="feature-center">
                                <span className="icon">
                                    <i>3</i>
                                </span>
                                <h3>Search</h3>
                                <p>The final step, hit the search button and view all flights to your destination!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}