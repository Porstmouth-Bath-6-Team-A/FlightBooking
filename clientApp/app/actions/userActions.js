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
				password 
			
			}
		});
}

export function updateUser(firstName, lastName, address, phoneNumber, emailAddress, password, oldEmailAddress){
		dispatcher.dispatch({
			type: userActions.UPDATE_USER,
			data: {
				firstName ,
				lastName ,
				address ,
				phoneNumber ,
				emailAddress, 
				password ,
				oldEmailAddress , 
			 
		}
	});
}

export function getLogIn(emailAddress,password){
        dispatcher.dispatch({
            type: userActions.GET_LOGIN,
            data: {
				emailAddress,
				password
            }
		});
}

