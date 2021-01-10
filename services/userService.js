const { connect } = require("mongodb");
const userData = require("../dataAccess/userData");
const dbHelper = require("../helper/dbHelper");


module.exports ={
    getUser: async (emailAddress,password) => {
        return await userData.getUser(emailAddress,password); 
    },
    updateUser: async (firstName,lastName,phoneNumber,address,emailAddress,password,oldEmailAddress) => {
		return await userData.updateUser(firstName,lastName,phoneNumber,address,emailAddress,password,oldEmailAddress);
    },
    deleteUser: async (emailAddress) => {
        return await userData.deleteUser(emailAddress);  
    },
    insertUser: async (firstName, lastName, phoneNumber, address, emailAddress, password) => {
        await userData.insertUser(firstName, lastName, phoneNumber, address, emailAddress, password);
        let user = await userData.getUser(emailAddress,password);
        return user;
    },
    insertLogIn: async (emailAddress) => {
        let token = Math.floor(new Date().getTime() / 1000).toString();
        
        await userData.insertLogIn(emailAddress,token,new Date());

        return token;
    },
    isLogIn: async (emailAddress,token) => {
        let login = await userData.getLogIn(token);
        
        if (login) {
            let diffMs = new Date () - login.updatedTokenTime ;
            let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); 
        
            if (diffMins > 5) {
                await userData.insertLogOut(emailAddress);
                return false;
            } 
            else {
                return true;
            }
        } else {
            return false;
        }

    },
    insertLogOut: async (emailAddress) => {
        return await userData.insertLogOut(emailAddress);
    }
}

