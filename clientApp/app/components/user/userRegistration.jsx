import React from 'react';
import userStore from '../../stores/userStore';
import * as userActions from '../../actions/userActions';
import {userEvents} from '../../enums/events';
import Navigation from '../../components/common/navigation';
import Footer from '../../components/common/footer';

export default class user extends React.Component {

    constructor(){
        super();
    }
    
    componentDidMount() {
		userStore.on(userEvents.SET_USER_DONE, this._onRender);
		userStore.on(userEvents.SET_USER_FAILED, this._onUserFailed);
	}

	componentWillUnmount() {
		userStore.off(userEvents.SET_USER_DONE, this._onRender);
		userStore.off(userEvents.SET_USER_FAILED, this._onUserFailed);
	}

	_onRender = () => {
		window.location.hash = '#/';
	}

	_onUserFailed = () => {
		alert('Please check emailAddress that is still in system.');
	}

	onRegister = () => {
		userActions.setUser(this.refs.firstName.value, this.refs.lastName.value, 
							this.refs.phoneNumber.value, this.refs.address.value, 
							this.refs.emailAddress.value, this.refs.password.value);
	}

    render() {
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
                                        <span className="intro-text-small">Register to FlightBook</span>
                                        <h1>Register</h1>	
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
									<h3>Registration Details</h3>
									<div className="row form-group">
										<div className="col-md-12">
											<label className="sr-only">First Name</label>
											<input type="text" ref="firstName" className="form-control" placeholder="First Name" required />
										</div>										
									</div>									
									<div className="row form-group">
										<div className="col-md-12">
											<label className="sr-only">Last Name</label>
											<input type="text" ref="lastName" className="form-control" placeholder="Last Name" required/>
										</div>										
									</div>									
									<div className="row form-group">
										<div className="col-md-12">
											<label className="sr-only">Phone Number</label>
											<input type="text" ref="phoneNumber" className="form-control" placeholder="Phone Number" required/>
										</div>										
									</div>									
									<div className="row form-group">
										<div className="col-md-12">
											<label className="sr-only">Address</label>
											<input type="text" ref="address" className="form-control" placeholder="Address" required/>
										</div>
									</div>
									<div className="row form-group">
										<div className="col-md-12">
											<label className="sr-only">Email Address</label>
											<input type="text" ref="emailAddress" className="form-control" placeholder="Email Address" required/>
										</div>
									</div>
									<div className="row form-group">
										<div className="col-md-12">
											<label className="sr-only">Password</label>
											<input type="password" ref="password" className="form-control" placeholder="Password" required/>
										</div>
									</div>									
									<div className="row form-group">
										<div className="col-md-12">
											<label className="sr-only">Confirm Password</label>
											<input type="password" ref="confirmpassword" className="form-control" placeholder="Confirm Password" required/>
										</div>
									</div>
									<div className="form-group">
										<input type="submit" onClick={this.onRegister} value="Register" className="btn btn-primary" />
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

