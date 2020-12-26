const express = require("express");
const app = express();
const flightService = require("../FlightBooking/services/flightService");
const placesScheduler = require('../FlightBooking/scheduler/placesScheduler');

placesScheduler.start();

app.use(express.static(__dirname + '/clientApp/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/clientApp/public/index.html');
});

(async () => {
let flight = await flightService.getFlights(
    'Economy',
    'SG',
    'SGD',
    'en-US',
    'RGN',
    'LHR',
    '2021-01-25',
    '2021-02-06',
    1,
    0,
    0
);

})();

app.listen(8080);
console.log("Application is running on Port 8080");