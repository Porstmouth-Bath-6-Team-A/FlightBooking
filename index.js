const express = require("express");
const app = express();
const flightService = require("../FlightBooking/services/flightService");
const dbHelper = require('../FlightBooking/helper/dbHelper');

app.get('/test', async (req, res) => {
    await dbHelper.insert('country', {Code: "SG", Name: "SINGAPORE"});

    let country = await dbHelper.find('country', {}); 
    console.log(country);
    console.log('------------');

    await dbHelper.update('country', {Code: "SG"}, {Code: "MY", Name: "MYANMMAR"});

    country = await dbHelper.find('country', {}); 
    console.log(country);
    console.log('------------');

    await dbHelper.delete('country', {Code: "SG"});

    country = await dbHelper.find('country', {}); 
    console.log(country);
    console.log('------------');

    res.send('test');
});

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