const { response } = require("express");
const userService = require("../services/userService")

module.exports = {
    getUser: async (req, res) => {
        let user = await userService.getUser(req.body.emailAddress, req.body.password);
        res.send (user);
    },
    insertUser: async (req, res) => {
        let user = await userService.insertUser(req.body.firstName, req.body.lastName, req.body.phoneNumber, req.body.address, req.body.emailAddress);
        res.send (user);
    },
    updateUser: async (req, res) => {
        let user = await userService.updateUser(req.body.firstName, req.body.lastName, req.body.phoneNumber, req.body.emailAddress, req.body.oldEmailAddress);
        res.send (user);
    },
    deleteUser: async (req, res) => {
        let user = await userService.deleteUser(req.body.emailAddress);
        res.send (user);
    },
    isLogIn: async (req, res) => {
        let user = await  userService.isLogin(req.body.emailAddress, req.body.token);
        res.send (user);
    },
    insertLogOut: async (req, res) => {
        let user = await userService.insertLogout(req.body.emailAddress);
        res.send (user);
    },
    insertLogin: async (req, res) => {
        let user = await userService.insertLogin(req.body.emailAddress);
        res.send (user);
    }
}