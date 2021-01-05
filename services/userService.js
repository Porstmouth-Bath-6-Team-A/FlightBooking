const userData = require("../dataAccess/userData");
const dbHelper = require("../helper/dbHelper");


module.exports ={
    getUser: async () => {
        return await userData.getUser(); 
    },
    updateUser: async () => {
    
    },
    deleteUser: async () => {
        return await userData.deleteUser();  
    },
    postUser: async () => {
        return await userData.postUser();
    },
    getLogInStatus: async () => {
    
    },
    postLogOut: () => {
        userData.destroy();
    }
}

