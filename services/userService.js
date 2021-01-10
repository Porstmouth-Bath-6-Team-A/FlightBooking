const { connect } = require("mongodb");
const userData = require("../dataAccess/userData");
const dbHelper = require("../helper/dbHelper");


module.exports ={
    updateUser: async (firstName, lastName, phoneNumber, address, emailAddress, password, oldEmailAddress) => {
		await userData.updateUser(firstName, lastName, phoneNumber, address, emailAddress, password, oldEmailAddress);
    },
    setUser: async (firstName, lastName, phoneNumber, address, emailAddress, password) => {
        await userData.setUser(firstName, lastName, phoneNumber, address, emailAddress, password);
    },
    setLogIn: async (emailAddress, password) => {
        let user = await userData.getUser(emailAddress, password);

        if (user) {
            let token = Math.floor(new Date().getTime() / 1000).toString();
            
            await userData.setLogIn(emailAddress, token, new Date());

            return {
                user: user,
                token: token
            };
        } else {
            return null;
        }
    },
    getLogInToken: async (emailAddress, token) => {
        let login = await userData.getLogIn(token);
        
        if (login) {
            let diffMs = new Date () - login.updatedTokenTime;
            let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); 
        
            if (diffMins > 5) {
                await userData.setLogOut(token);

                return '';
            } 
            else {
                let token = Math.floor(new Date().getTime() / 1000).toString();
            
                await userData.setLogIn(emailAddress, token, new Date());

                return token;
            }
        } else {
            return '';
        }

    },
    setLogOut: async (token) => {
        await userData.setLogOut(token);
    }
}

