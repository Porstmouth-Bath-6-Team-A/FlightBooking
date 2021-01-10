import React from 'react';
import userStore from '../../stores/userStore';
import * as userActions from '../../actions/userActions';
import {userEvents} from '../../enums/events';

export default class user extends React.Component {
	
	constructor(){
		super();
	}

	componentDidMount() {
			userStore.on(userEvents.UPDATE_USER_DONE, this._onRender);
		}
	
	componentWillUnmount() {
			userStore.off(userEvents.UPDATE_USER_DONE, this._onRender);
		}
	
	_onRender = () => {
			window.location.href = '/user';
		 
		}
	
	onUpdate = () => {
			userActions.updateUser(this.refs.firstName.value, this.refs.lastName.value, this.refs.phoneNumber.value, this.refs.address.value, this.refs.emailAddress.value, this.refs.password.value , this.refs.oldEmailAddress.value);
	
		}
	
	render() {
		return(
			<div>
                <label>
                    FirstName:
                    <input ref="firstName" type="text" name="Firstname" />
				</label>
				<label>
				<br></br>
                    LastName:
					<input ref="lastName" type ="text" name="Lastname"/>
				</label>
				<br></br>
				<label>
                    PhoneNumber:
                    <input ref="phoneNumber" type ="text" name="PhoneNumber"/>
				</label>
				<br></br>
				<label>
                    Address:
                    <input ref="address" type ="text" name="Address"/>
				</label>
				<br></br>
				<label>
                    EmailAddress:
                    <input ref="emailAddress" type ="text" name="EmailAddress"/>
                </label>
				<br></br>
				<label >
					Password: 
					<input ref="password" type="password" name="password" />
				</label>     
				<br></br>
				<label>
					OldEmailAddress:
					<input ref="oldEmailAddress" type="text" name="oldEmailAddress" />
				</label>
				<input type="button" value="Update" onClick={this.onUpdate} />
								
		</div>
			
		
		);
    }
}
	
