import React from 'react';
import {Link} from 'react-router-dom';
import userServices from '../../services/userServices';
import userStore from '../../stores/userStore';
import {userEvents} from '../../enums/events';
import * as userActions from '../../actions/userActions';

export default class flights extends React.Component {

    constructor(props){
        super();
    }

    componentDidMount() {
        userStore.on(userEvents.SET_LOGOUT_DONE, this.userLogoutRedirect);
    }

    componentWillUnmount() {
        userStore.off(userEvents.SET_LOGOUT_DONE, this.userLogoutRedirect);
    }

    userLogoutRedirect = () => {
        this.forceUpdate();
    }

    logout = () => {
        userActions.setLogOut();
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
                                <li><Link to="/destination">Destinations</Link></li>
                                <li><a href="#!">Booking</a></li>
                                <li><Link to="/about">About us</Link></li>
                                <li>
                                    {!emailAddress && 
                                        <Link to="/user/login">Login</Link>
                                    }
                                    {emailAddress && 
                                        <Link to="/user/update">{emailAddress}</Link>
                                    }
                                </li>
                                {emailAddress && 
                                    <li style={{cursor: 'pointer', color: 'white'}} onClick={this.logout}>
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