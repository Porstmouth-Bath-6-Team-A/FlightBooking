import React from 'react';
import {Link} from 'react-router-dom';
import userServices from '../../services/userServices';
import userStore from '../../stores/userStore';
import {userEvents} from '../../enums/events';

export default class flights extends React.Component {

    constructor(props){
        super();
    }

    logout = () => {

    }

    render(){
        let emailAddress = userServices.getEmailAddress();

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
                                <li>
                                    {!emailAddress && 
                                        <Link to="/user/login">Login</Link>
                                    }
                                    {emailAddress && 
                                        <Link to="/user/update">{emailAddress}</Link>
                                    }
                                </li>
                                {emailAddress && 
                                    <li onClick={this.logout}>
                                        Logout
                                    </li>
                                }
                            </ul>	
                        </div>
                    </div>                    
                </div>
            </nav>
        );
    }

}