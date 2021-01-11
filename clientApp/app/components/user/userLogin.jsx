import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../../components/common/navigation';
import Footer from '../../components/common/footer';
import * as userActions from '../../actions/userActions';
import userStore from '../../stores/userStore';
import {userEvents} from '../../enums/events';

export default class userLogin extends React.Component {

    constructor(){
        super();
    }

    componentDidMount() {
        userStore.on(userEvents.SET_LOGIN_DONE, this.successLogin);
        userStore.on(userEvents.SET_LOGIN_FAILED, this.failLogin);
    }

    componentWillUnmount() {
        userStore.off(userEvents.SET_LOGIN_DONE, this.successLogin);
        userStore.off(userEvents.SET_LOGIN_FAILED, this.failLogin);
    }

    successLogin = () => {
        window.location.hash = '#/';
    }

    failLogin = () => {
        alert("your login is failed. Please check email and password");
    }

    onLogin = () => {
        userActions.setLogIn(this.refs.email.value, this.refs.password.value);
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
                                        <span className="intro-text-small">Login to FlightBook</span>
                                        <h1>Login</h1>	
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
                                <h3>Login Details</h3>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="sr-only">Email</label>
                                            <input type="text" ref="email" id="loginUsername" className="form-control" placeholder="Email" required/>
                                        </div>                                        
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="sr-only">Password</label>
                                            <input type="password" ref="password" id="loginPassword" className="form-control" placeholder="Password" required/>
                                        </div>
                                    </div>                                    
                                    <div>
                                        <br /><br />
                                    </div>
                                    <div className="form-group">
                                        <input type="button" onClick={this.onLogin} value="Login" className="btn btn-primary" />
                                    </div>                                    
                                </div>
                                <div className="col-md-5 col-md-push-1">
                                    <div className="registerUser">
                                        <h3>Dont have an Account?</h3>
                                        <ul>
                                            <li className="registerHere">Register <Link to={"/user/register"}>Here</Link></li>
                                        </ul>
                                    </div>
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