const common = require("../enums/common");
const { dbCollections } = require("../enums/common")
const dbHelper = require("../helper/dbHelper")

module.exports ={
    getUser: async (emailAddress, password)=>{
        let user = await dbHelper.find(common.dbCollections.user, {emailAddress: emailAddress, password: password});

        return user;
    },
    hasUser: async (emailAddress)=>{
        let user = await dbHelper.find(common.dbCollections.user, {emailAddress: emailAddress});

        return user.length > 0;
    },
    updateUser: async(firstName, lastName, phoneNumber, address, emailAddress, password, oldEmailAddress) => {
        await dbHelper.update(common.dbCollections.user, {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            address: address,
            emailAddress: emailAddress, 
            password: password
        }, {
            emailAddress: oldEmailAddress
        });
    },
    setUser: async (firstName, lastName, phoneNumber, address, emailAddress, password) => {
        await dbHelper.insert(common.dbCollections.user, [{
            firstName: firstName,
            lastName: lastName, 
            phoneNumber: phoneNumber, 
            address: address,
            emailAddress: emailAddress,
            password: password
        }]);
    },
    setLogIn: async (emailAddress, token, updatedTokenTime)=>{
        await dbHelper.insert(common.dbCollections.login, [{emailAddress: emailAddress, token: token, updatedTokenTime: updatedTokenTime}]);
    },
    getLogIn: async (token)=>{
        let user = await dbHelper.find(common.dbCollections.login, {token: token});

        return user.length == 0 ? null : user[0];
    },
    setLogOut: async (token)=>{
       await dbHelper.delete(common.dbCollections.login, {token: token});
    }

}

