const { dbCollections } = require("../enums/common")
const dbHelper = require("../helper/dbHelper")

module.exports ={
    getUser: async()=>{
        let user = await dbHelper.find(common.dbCollections.user);
        return user.field;
    },
    deleteUser: async () => {
        let user = await dbHelper.delete('firstName' + 'lastName' + 
                                        'userName' + 'passWord' + 
                                        'phoneNumber' + 'address' + 'emailAddress');
        return user.field;
    },
    updateUser: async() => {
        let user = await dbHelper.update('user',{});
        
        return user.field;
    },
    insertUser: async () => {
        let user =  await dbHelper.insert('user',[{firstName:"Kaung",lastName:"Oo",phoneNumber:"2143409",address:"Boonlay",emailAddress:"kaung@gmail.com"}]);
        user =  await dbHelper.find('user',{});
        return user.filed;
    },
    getUserbyEmail:async () => {
        let user  = await dbHelper.find('emailAddress',[{EmailAddress:"kaunghtetoo@gmail.com"}]);
        user = await dbHelper.find('emailAddress',{});
    
        return user.field;
    },
    postUser: async () =>{
        let user = await dbHelper.get('user',{});
        return user.field;
    }
}

