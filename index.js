const express = require("express");
const app = express();
const flightService = require("../FlightBooking/services/flightService");

app.get('/home', async (req, res) => {
    let val = await flightService.getPlaces();
    console.log(val);
    val = await flightService.getCountires();
    console.log(val);
    val = await flightService.getCurrencies();
    console.log(val);
    val = await flightService.getLanguages();
    console.log(val);
    val = await flightService.getFlightsInfo();
    console.log(val);
    res.send("hello world");
});

app.listen(8080);
console.log("Application is running on Port 8080");