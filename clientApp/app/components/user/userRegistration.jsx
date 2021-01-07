import React from 'react';

export default class user extends React.Component {

    constructor(){
        super();
    }
    
    

    render(){
        return(
			<div>
            <form>
                <label>
                    FirstName:
                    <input type="text" name="Firstname" />
				</label>
				<label>
				<br></br>
                    LastName:
					<input type ="text" name="Lastname"/>
				</label>
				<br></br>
				<label>
                    PhoneNumber:
                    <input type ="text" name="PhoneNumber"/>
				</label>
				<br></br>
				<label>
                    Address:
                    <input type ="text" name="Address"/>
				</label>
				<br></br>
				<label>
                    EmailAddress:
                    <input type ="text" name="EmailAddress"/>
                </label>
				<br></br>
				<input type="submit" value="Submit" />
				
			</form>
		</div>
			
		);
    }
}

