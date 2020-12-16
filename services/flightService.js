let flightApi = require('../dataAccess/flightApi');

module.exports = {
    getPlaces: async () => {
        return await flightApi.getPlaces();   
    },
    getCountires: async () => {
        return await flightApi.getCountries();
    },
    getFlightsInfo:async() => {
        return await flightApi.getFlightInfo();
    },
    getLocales: async() => {
        return await flightApi.getLocales();
    },
    getCurrencies: async() => {
        return await flightApi.getCurrencies();
    }
}