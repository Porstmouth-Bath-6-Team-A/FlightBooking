let flightApi = require('../dataAccess/flightApi');

module.exports = {
    getPlaces: async () => {
        return await flightApi.getPlaces();   
    },
    getCountries: async (language) => {
        return await flightApi.getCountries(language);
    },
    getFlights: async(cabinclass, country, currency, language, fromDist, toDist, fromDate, toDate, adults, children, infants) => {
        return await flightApi.getFlights(cabinclass, country, currency, language, fromDist, toDist, fromDate, toDate, adults, children, infants);
    },
    getLanguages: async() => {
        return await flightApi.getLanguages();
    },
    getCurrencies: async() => {
        return await flightApi.getCurrencies();
    }
}