const { response } = require("express");
const userService = require("../services/userService")

module.exports = {
    setUser: async (req, res) => {
        await userService.insertUser(req.body.firstName, req.body.lastName, req.body.phoneNumber, req.body.address, req.body.emailAddress, req.body.password);

        let userLogin = await userService.setLogIn(req.body.emailAddress);

        res.send({
            statusCode: userLogin == null ? 'FAIL' : 'OK',
            statusDesc: {
                user: userLogin.user,
                token: userLogin.token
            }
        });
    },
    updateUser: async (req, res) => {
        await userService.updateUser(req.body.firstName, req.body.lastName, req.body.phoneNumber, req.body.address, req.body.emailAddress, req.body.password, req.body.oldEmailAddress);
        
        res.send({
            statusCode: 'OK'
        });
    },
    getLogInToken: async (req, res) => {
        let logInToken = await userService.getLogInToken(req.body.emailAddress, req.body.token);

        res.send({
            statusCode: logInToken != '' ? 'OK' : 'FAIL',
            statusDesc: logInToken
        });
    },
    setLogOut: async (req, res) => {
        await userService.setLogOut(req.body.token);

        res.send({
            statusCode: 'OK'
        });
    },
    setLogIn: async (req, res) => {
        let userLogin = await userService.setLogIn(req.body.emailAddress, req.body.password);

        res.send({
            statusCode: userLogin == null ? 'FAIL' : 'OK',
            statusDesc: {
                user: userLogin == null ? null : userLogin.user,
                token: userLogin == null ? null : userLogin.token
            }
        });
    }
}