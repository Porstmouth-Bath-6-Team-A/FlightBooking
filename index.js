const express = require("express");
const app = express();
const flightService = require("../FlightBooking/services/flightService");

app.get('/home', async (req, res) => {
    let places = await flightService.getPlaces();
    console.log(places);
    res.send("hello world");
});

app.listen(8080);
console.log("Application is running on Port 8080");