import {EventEmitter} from 'events';
import dispatcher from '../dispatchers/dispatcher';
import {userEvents} from '../enums/events';
import {userActions} from '../enums/actions';
import $ from 'jquery';


class userStore extends EventEmitter {
	constructor(){
		super();
		this._setUserURL = "/user/insert";
		this._updateUserURL = "/user/update";
		this._islogInURL= '/login';

		this._user = null;
		
		dispatcher.register(this._handleActions);
	}
	setUserData = (firstName, lastName, phoneNumber, address, emailAddress, password) => {
		$.ajax({
			method: "POST",
			url: this._setUserURL,
			data: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				phoneNumber: phoneNumber,
				address: address,
				emailAddress: emailAddress,
				password: password
			}),
			dataType: 'json',
			contentType: 'application/json; charset=UTF-8',
			success: (data) => {
				this.emit(userEvents.SET_USER_DONE);
			},
			error: (err) => {
				console.log(err);
			}
		});
	}
	
	updateUserData = (firstName, lastName, phoneNumber, address, emailAddress, password, oldEmailAddress) => {
		$.ajax({
			method: "POST",
			url: this._updateUserURL,
			data: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				phoneNumber: phoneNumber,
				address: address,
				emailAddress: emailAddress,
				password: password,
				oldEmailAddress: oldEmailAddress
			}),
			datatype:'Json',
			contentType: 'application/json; charset=UTF-8',
			success: (data) =>{
				this.emit(userEvents.UPDATE_USER_DONE);
			},
			error:(err) => {
				console.log(err);
			}
		});
	}

	getLogInData = (emailAddress,password) =>{
		$.ajax({
			method:"POST",
			url: this_getLogInURL,
			data: JSON.stringify({
				emailAddress: emailAddress,
				password: password
			}),
			datatype:'JSON',
			contentType: 'application/json; charset=UTF-8',
			success: (data) =>{
				this.emit(userEvents.GET_LOGIN_DONE);
			},
			error:(err) => {
				console.log(err);
			}
		});
	}

	_handleActions = (action) => {
		switch (action.type) {
			case userActions.SET_USER:
				this.setUserData(action.data.firstName, action.data.lastName, action.data.phoneNumber, action.data.address, action.data.emailAddress, action.data.password);
					break;
			case userActions.UPDATE_USER:
				this.updateUserData(action.data.firstName, action.data.lastName, action.data.phoneNumber, action.data.address, action.data.emailAddress, action.data.password, action.data.oldEmailAddress);
					break;
			case userActions.GET_LOGIN:
				this.getLogInData(action.data.emailAddress, action.data.password);
				break;
			}
	}

	setUser = () => {
		return this._user;
	}
	updateUser = () => {
		return this._user;
	}
	getLogIn= () => {
		
			if (!emailAddress){
				console.log('User Not Found with Emailaddress '+ emailAddress);
				return done(null, false, 
					res.redirect('/login'));                 
			}
		return this._logIn;
	}
}


const _userStore = new userStore();
export default _userStore;

