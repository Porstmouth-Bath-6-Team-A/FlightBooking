const userData = require("../dataAccess/userData");
const dbHelper = require("../helper/dbHelper");


module.exports ={
    getUser: async (emailAddress,password) => {
        return await userData.getUser(emailAddress,password); 
    },
    updateUser: async (firstName,lastName,phoneNumber,address,emailAddress) => {
		return await userData.updateUser(firstName,lastName,phoneNumber,address,emailAddress);
    },
    deleteUser: async (emailAddress) => {
        return await userData.deleteUser(emailAddress);  
    },
    insertUser: async (firstName,lastName,phoneNumber,address,emailAddress) => {
        return await userData.insertUser(firstName,lastName,phoneNumber,address,emailAddress);
    },
    insertlogin: async (emailAddress,token,updatedTokenTime) => {
        return await userData.insertlogin(emailAddress,token,updatedTokenTime);
    },
    isLogin: async (emailAddress,token,currentTime) => {
        let login = await userData.getLogin(emailAddress,token,currentTime);

        if (login) {
            let diffMs = login.updatedTokenTime - new Date();
            let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); 

            if (diffMins > 5) {
                await userData.insertLogout(emailAddress);
                return false;
            } else {
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

