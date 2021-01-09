const common = require("../enums/common");
const { dbCollections } = require("../enums/common")
const dbHelper = require("../helper/dbHelper")

module.exports ={
    getUser: async (emailAddress, password)=>{
        let user = await dbHelper.find(common.dbCollections.user, {emailAddress: emailAddress, password: password});
        return user;
    },
    deleteUser: async (emailAddress) => {
        let user = await dbHelper.delete(common.dbCollections.user, {emailAddress: emailAddress});
        return user;
    },
    updateUser: async(firstName,lastName,phoneNumber,address,emailAddress,password,oldEmailAddress) => {
        let user = await dbHelper.update(common.dbCollections.user, {firstName: firstName,lastName: lastName , phoneNumber: phoneNumber, address: address, 
                                                                      emailAddress: emailAddress}, {password: password},{emailAddress: oldEmailAddress});
        return user;
    },
    insertUser: async (firstName,lastName,phoneNumber,address,emailAddress,password) => {
        let user =  await dbHelper.insert(common.dbCollections.user, [{firstName: firstName,lastName: lastName , phoneNumber: phoneNumber, address: address ,emailAddress: emailAddress, password: password}]);
        return user;
    },

    insertLogIn:async (emailAddress, token, updatedTokenTime)=>{
        let user = await dbHelper.insert(common.dbCollections.login, [{emailAddress: emailAddress, token, updatedTokenTime: updatedTokenTime}]);
        return user;
    },
    getLogIn: async (token)=>{
        let user = await dbHelper.find(common.dbCollections.login, {token: token});

        return user.length == 0 ? null : user[0];
    },
    insertLogOut: async (emailAddress)=>{
        let user = await dbHelper.delete(common.dbCollections.login, {emailAddress: emailAddress});
        return user;
    }

}

