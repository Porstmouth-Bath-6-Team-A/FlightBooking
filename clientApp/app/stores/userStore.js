import {EventEmitter} from 'events';
import dispatcher from '../dispatchers/dispatcher';
import {userEvents} from '../enums/events';
import {userActions} from '../enums/actions';
import $ from 'jquery';


class userStore extends EventEmitter {
	constructor(){
		super();
		this._setUserURL = "/user";
		this._updateUserURL = "/user/update";
		this._user = [];
		
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
			method: "PATCH",
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

	_handleActions = (action) => {
		switch (action.type) {
			case userActions.SET_USER:
				this.setUserData(action.data.firstName, action.data.lastName, action.data.phoneNumber, action.data.address, action.data.emailAddress, action.data.password);
					break;
			case userActions.UPDATE_USER:
				this.updateUserData(action.data.firstName, action.data.lastName, action.data.phoneNumber, action.data.address, action.data.emailAddress, action.data.password, action.data.oldEmailAdress);
					break;
			}
	}

	setUser = () => {
		return this._user;
	}
	updateUser = () => {
		return this.user;
	}
}
	

const _userStore = new userStore();
export default _userStore;

