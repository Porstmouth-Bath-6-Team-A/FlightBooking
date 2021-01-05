const userData = require("../dataAccess/userData");
const dbHelper = require("../helper/dbHelper");


module.exports ={
    getUser: async (emailAddress,password) => {
        return await userData.getUser(emailAddress,password); 
    },
    updateUser: async (firstName,lastName,phoneNumber,address,emailAddress,oldEmailAddress) => {
		return await userData.updateUser(firstName,lastName,phoneNumber,address,emailAddress,oldEmailAddress);
    },
    deleteUser: async (emailAddress) => {
        return await userData.deleteUser(emailAddress);  
    },
    insertUser: async (firstName,lastName,phoneNumber,address,emailAddress) => {
        return await userData.insertUser(firstName,lastName,phoneNumber,address,emailAddress);
    },
    insertLogin: async (emailAddress) => {
        let token = Math.floor(new Date().getTime() / 1000).toString();
        
        await userData.insertLogin(emailAddress,token,new Date());

        return token;
    },
    isLogin: async (emailAddress,token) => {
        let login = await userData.getLogin(token);
        
        if (login) {
            let diffMs = new Date () - login.updatedTokenTime ;
            let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); 
        
            if (diffMins > 5) {
                await userData.insertLogout(emailAddress);
                return false;
            } 
            else {
                return true;
            }
        } else {
            return false;
        }

    },
    insertLogout: async (emailAddress) => {
        return await userData.insertLogout(emailAddress);
    }
}

