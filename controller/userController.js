const { response } = require("express");
const userService = require("../services/userService")

module.exports = {
    getUser: async (req, res) => {
        console.log(req.query);
        let user = await userService.getUser(req.query.emailAddress, req.query.password);
        res.send (user);    
    },
    insertUser: async (req, res) => {
        let user = await userService.insertUser(req.body.firstName, req.body.lastName, req.body.phoneNumber, req.body.address, req.body.emailAddress);
        res.send (user);
    },
    updateUser: async (req, res) => {
        let user = await userService.updateUser(req.body.firstName, req.body.lastName, req.body.phoneNumber, req.body.address, req.body.emailAddress, req.body.oldEmailAddress);
        res.send (user);

    },
    deleteUser: async (req, res) => {
        let user = await userService.deleteUser(req.body.emailAddress);
        res.send (user);
    },
    isLogIn: async (req, res) => {
        let user = await  userService.isLogIn(req.body.emailAddress, req.body.token);
        res.send (user);
    },
    insertLogOut: async (req, res) => {
        let user = await userService.insertLogOut(req.body.emailAddress);
        res.send (user);
    },
    insertLogIn: async (req, res) => {
        let user = await userService.insertLogIn(req.body.emailAddress);
        res.send (user);
    }
}