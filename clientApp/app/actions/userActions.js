import dispatcher from "../dispatchers/dispatcher";
import {userActions} from '../enums/actions';

export function setUser(firstName, lastName, address, phoneNumber, emailAddress, password){
		dispatcher.dispatch({
			type: userActions.SET_USER,
			data: {
				firstName ,
				lastName ,
				address ,
				phoneNumber ,
				emailAddress ,
				password ,
			
			}
		});
}

