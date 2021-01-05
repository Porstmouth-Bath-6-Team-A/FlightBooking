const userService = require("../services/userService")

module.exports = {
    getUser: async (req, res) => {
        let user = await userService.getUser(req.body.emailAddress,req.body.password);
        
    },
    postUser: async (req, res) => {
    
    },
    updateUser: async (req, res) => {
    
    },
    deleteUser: async (req, res) => {
    
    },
    postLogIn: async (req, res) => {
    
    },
    postLogOut: async (req, res) => {
    
    },
    getLogInStatus: async (req, res) => {
    
    }
}