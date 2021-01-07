import {EventEmitter} from 'events';
import dispatcher from '../dispatchers/dispatcher';
import {userEvents} from '../enums/events';
import {userActions} from '../enums/actions';

class userStore extends EventEmitter {
	constructor(){
		super();
		this._setUserURL = "/user";
		
		this._user = [];
		
		dispatcher.register(this._handleActions);
	}
	setUserData = (firstName, lastName, phoneNumber, address, emailAddress) => {
		$.post(this._setUserURL,{
			firstName: firstName,
			lastName: lastName,
			phoneNumber: phoneNumber,
			address: address,
			emailAddress: emailAddress
		}, (data) => {
			this._user = data;
			this.emit(userEvents.SET_USER_DONE);
		});
	}

	_handleActions = (action) => {
		switch (action.type) {
			case userActions.SET_USER:
				this.setUserData(action.data.firstName, action.data.lastName, action.data.phoneNumber, action.data.address, action.data.emailAddress);
		}
	}
}
const _userStore = new userStore();
export default _userStore;

