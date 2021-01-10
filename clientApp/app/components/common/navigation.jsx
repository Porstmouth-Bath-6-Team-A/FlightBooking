import React from 'react';

export default class flights extends React.Component {

    constructor(props){
        super();
    }

    render(){
        return(
            <nav className="gtco-nav" role="navigation">
                <div className="gtco-container">                    
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                            <div id="gtco-logo"><a href="#/">Flight Booking <em>.</em></a></div>
                        </div>
                        <div className="col-xs-8 text-right menu-1">
                            <ul>
                                <li><a href="#!">Destinations</a></li>
                                <li><a href="#!">Booking</a></li>
                                <li><a href="#!">Contact</a></li>
                                <li><a href="#!">Login</a></li>
                            </ul>	
                        </div>
                    </div>                    
                </div>
            </nav>
        );
    }

}