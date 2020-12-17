let flightApi = require('../dataAccess/flightApi');

module.exports = {
    getPlaces: async () => {
        return await flightApi.getPlaces();   
    },
    getCountires: async () => {
        return await flightApi.getCountries();
    },
    getFlights: async() => {
        return await flightApi.getFlights();
    },
    getLanguages: async() => {
        return await flightApi.getLanguages();
    },
    getCurrencies: async() => {
        return await flightApi.getCurrencies();
    }
}