const userData = require("../dataAccess/userData");

module.exports ={
    updateUser: async (firstName, lastName, phoneNumber, address, emailAddress, password, oldEmailAddress) => {
        let hasUser = await userData.hasUser(oldEmailAddress);

        if (!hasUser) {
            return null;
        } else {
            await userData.updateUser(firstName, lastName, phoneNumber, address, emailAddress, password, oldEmailAddress);

            let user = await userData.getUser(emailAddress, password);

            if (user.length > 0) {
                return {
                    user: user[0]
                };
            } else {
                return null;
            }
        }
    },
    setUser: async (firstName, lastName, phoneNumber, address, emailAddress, password) => {
        let hasUser = await userData.hasUser(emailAddress);

        if (hasUser) {
            return null;
        } else {
            await userData.setUser(firstName, lastName, phoneNumber, address, emailAddress, password);

            let user = await userData.getUser(emailAddress, password);

            if (user.length > 0) {
                let token = Math.floor(new Date().getTime() / 1000).toString();
                
                await userData.setLogIn(emailAddress, token, new Date());

                return {
                    user: user[0],
                    token: token
                };
            } else {
                return null;
            }
        }
    },
    setLogIn: async (emailAddress, password) => {
        let user = await userData.getUser(emailAddress, password);

        if (user.length > 0) {
            let token = Math.floor(new Date().getTime() / 1000).toString();
            
            await userData.setLogIn(emailAddress, token, new Date());

            return {
                user: user[0],
                token: token
            };
        } else {
            return null;
        }
    },
    getLogInToken: async (emailAddress, token) => {
        let login = await userData.getLogIn(token);
        
        if (login.length > 0) {
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

