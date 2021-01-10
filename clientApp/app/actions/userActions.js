import dispatcher from "../dispatchers/dispatcher";
import {userActions} from '../enums/actions';

export function setUser(firstName, lastName, address, phoneNumber, emailAddress, password){
	dispatcher.dispatch({
		type: userActions.SET_USER,
		data: {
			firstName: firstName,
			lastName: lastName,
			address: address,
			phoneNumber: phoneNumber,
			emailAddress: emailAddress,
			password: password		
		}
	});
}

export function updateUser(firstName, lastName, address, phoneNumber, emailAddress, password, oldEmailAddress){
	dispatcher.dispatch({
		type: userActions.UPDATE_USER,
		data: {
			firstName: firstName,
			lastName: lastName,
			address: address,
			phoneNumber: phoneNumber,
			emailAddress: emailAddress,
			password: password,
			oldEmailAddress: oldEmailAddress
		}
	});
}

export function setLogIn(emailAddress,password){
	dispatcher.dispatch({
		type: userActions.SET_LOGIN,
		data: {
			emailAddress: emailAddress,
			password: password
		}
	});
}

export function setLogOut() {
	dispatcher.dispatch({
		type: userActions.SET_LOGOUT,
		data: {
		}
	});
}

export function getLogInToken() {
	dispatcher.dispatch({
		type: userActions.GET_LOGIN_TOKEN,
		data: {
		}
	});
}