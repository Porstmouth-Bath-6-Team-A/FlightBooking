const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const placesScheduler = require('../FlightBooking/scheduler/placesScheduler');
const userController = require('../FlightBooking/controller/userController');
const bookingController = require('../FlightBooking/controller/bookingController');
const flightController = require('../FlightBooking/controller/flightController');
const config = require('../FlightBooking/config.json');

placesScheduler.start(config.SchedulerIntervals.Place);

app.use(express.static(__dirname + '/clientApp/public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/clientApp/public/index.html');
});

app.get('/places', async (req, res) => {
    return await flightController.getPlaces(req, res);
});

app.post('/flights', async (req, res) => {
    return await flightController.getFlights(req, res);
});

app.get('/booking', async (req, res) => {
    return await bookingController.getBookingFlights(req, res);
});

app.post('/payment/success', async (req, res) => {
    return await bookingController.postPaymentSuccess(req, res);
});

app.get('/user', async (req, res) => {
    return await userController.getUser(req, res);
});

app.post('/user', async (req, res) => {
    return await userController.postUser(req, res);
});

app.patch('/user', async (req, res) => {
    return await userController.updateUser(req, res);
});

app.delete('/user', async (req, res) => {
    return await userController.deleteUser(req, res);
});

app.post('/user/login', async (req, res) => {
    return await userController.postLogIn(req, res);
});

app.post('/user/logout', async (req, res) => {
    return await userController.postLogOut(req, res);
});

app.post('/user/loginStatus', async (req, res) => {
    return await userController.getLogInStatus(req, res);
});

app.listen(8080);
console.log("Application is running on Port 8080");