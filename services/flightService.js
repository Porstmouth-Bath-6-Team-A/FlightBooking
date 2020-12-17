let flightApi = require('../dataAccess/flightApi');

module.exports = {
    getPlaces: async () => {
        return await flightApi.getPlaces();   
    },
    getCountries: async (language) => {
        return await flightApi.getCountries(language);
    },
    getFlights: async(country, currency, language, fromDist, toDist, fromDate, toDate) => {
        return await flightApi.getFlights(country, currency, language, fromDist, toDist, fromDate, toDate);
    },
    getLanguages: async() => {
        return await flightApi.getLanguages();
    },
    getCurrencies: async() => {
        return await flightApi.getCurrencies();
    }
}