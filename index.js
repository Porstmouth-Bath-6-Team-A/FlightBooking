const express = require("express");
const app = express();

const placesScheduler = require('../FlightBooking/scheduler/placesScheduler');
const userController = require('../FlightBooking/controller/userController');
const bookingController = require('../FlightBooking/controller/bookingController');
const flightController = require('../FlightBooking/controller/flightController');
const config = require('../FlightBooking/config.json');
const { dbCollections } = require("./enums/common");
const dbHelper = require("./helper/dbHelper");
const common = require("./enums/common");
const userService = require("./services/userService");
const userData = require("./dataAccess/userData");
const { getUser } = require("./dataAccess/userData");

placesScheduler.start(config.SchedulerIntervals.Place);

app.use(express.static(__dirname + '/clientApp/public'));
app.use(express.json()); 



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/clientApp/public/index.html');
});

app.get('/places', async (req, res) => {
    await flightController.getPlaces(req, res);
});

app.post('/flights', async (req, res) => {
    await flightController.getFlights(req, res);
});

app.get('/booking', async (req, res) => {
    await bookingController.getBookingFlights(req, res);
});

app.post('/payment/create', async (req, res) => {
    await bookingController.postCreatePayment(req, res);
});

app.post('/payment/success', async (req, res) => {
    await bookingController.postPaymentSuccess(req, res);
});

app.post('/user/get', async (req, res) => {
    await userController.getUser(req, res);
});

app.post('/user/insert', async (req, res) => {
    await userController.insertUser(req, res);
});

app.post('/user/update', async (req, res) => {
    await userController.updateUser(req, res);
});

app.delete('/user', async (req, res) => {
    await userController.deleteUser(req, res);
});

app.post('/user/login', async (req, res) => {
    await userController.insertLogIn(req, res);
});

app.post('/user/logout', async (req, res) => {
    await userController.insertLogOut(req, res);
});

app.post('/user/loginStatus', async (req, res) => {
    await userController.isLogIn(req, res);
});

app.listen(8080);
console.log("Application is running on Port 8080");