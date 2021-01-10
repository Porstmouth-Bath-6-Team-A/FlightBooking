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
		this._setLoginUrl= '/user/login';
		this._setLogoutUrl= '/user/logout';
		this._getLoginTokenUrl = '/user/loginStatus';

		this._user = null;
		this._token = null;
		
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
				this._user = data.statusDesc.user;
				this._token = data.statusDesc.token;
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

	setLoginData = (emailAddress, password) =>{
		$.ajax({
			method:"POST",
			url: this._setLoginUrl,
			data: JSON.stringify({
				emailAddress: emailAddress,
				password: password
			}),
			datatype:'JSON',
			contentType: 'application/json; charset=UTF-8',
			success: (data) => {
				if (data.statusCode == 'OK') {
					this._user = data.statusDesc.user;
					this._token = data.statusDesc.token;
					this.emit(userEvents.SET_LOGIN_DONE);
				} else {
					this.emit(userEvents.SET_LOGIN_FAILED);
				}
			},
			error:(err) => {
				console.log(err);
			}
		});
	}

	setLogOutData = () => {
		$.ajax({
			method:"POST",
			url: this._setLogoutUrl,
			data: JSON.stringify({
				token: this._token
			}),
			datatype:'JSON',
			contentType: 'application/json; charset=UTF-8',
			success: (data) => {
				this.emit(userEvents.SET_LOGOUT_DONE);
			},
			error:(err) => {
				console.log(err);
			}
		});
	}

	getLoginToken = () => {
		$.ajax({
			method:"POST",
			url: this._getLoginTokenUrl,
			data: JSON.stringify({
				emailAddress: this._user.emailAddress,
				token: this._token
			}),
			datatype:'JSON',
			contentType: 'application/json; charset=UTF-8',
			success: (data) => {
				if (data.statusCode == 'OK') {
					this._token = data.statusDesc.token;
					this.emit(userEvents.GET_LOGIN_TOKEN_DONE);
				} else {
					this._user = null;
					this._token = null;
					this.emit(userEvents.GET_LOGIN_TOKEN_FAILED);
				}
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
			case userActions.SET_LOGIN:
				this.setLogInData(action.data.emailAddress, action.data.password);
				break;
			case userActions.SET_LOGOUT:
				this.setLogOutData();
				break;
			case userActions.GET_LOGIN_TOKEN:
				this.getLoginToken();
				break;
		}
	}

	setUser = () => {
		return this._user;
	}

	updateUser = () => {
		return this._user;
	}
}


const _userStore = new userStore();
export default _userStore;

