const got = require('got');
const config = require('../config.json');

module.exports = {
    getPlaces: async () => {
        let response = await got(config.ApiUrl + '/geo/v1.0?apikey=' + config.ApiKey);

        return response.body;
    },
<<<<<<< HEAD
    getFlights: async (country, currency, language, fromDist, toDist, fromDate, toDate) => {
        let response = await got(config.ApiUrl + '/browseroutes/v1.0/' + country + '/' 
                                                                       + currency + '/' 
                                                                       + language + '/'  
                                                                       + fromDist + '/' 
                                                                       + toDist + '/'
                                                                       + fromDate + '/'
                                                                       + toDate + '/'
                                                                       + '?apikey=' + config.ApiKey);
        return response.body;
    },
    getCountries: async (language) => {
        let response = await got(config.ApiUrl + '/reference/v1.0/countries/' + language + '?apikey=' + config.ApiKey);

        return response.body;
    },
    getLanguages: async () => {
        let response = await got(config.ApiUrl + '/reference/v1.0/locales?apikey='+ config.ApiKey);

        return response.body;
    },
    getCurrencies: async () =>{
        let response = await got(config.ApiUrl + '/reference/v1.0/currencies?apikey='+config.ApiKey);
        
        return response.body;
=======
    getFlights: async (country, currency, locale, fromDist, toDist, fromDate, toDate) => {
        let retVal = await got.default.get(config.ApiUrl + '/browseroutes/v1.0/' + country + '/' 
                                                                                + currency + '/' 
                                                                                + locale + '/'  
                                                                                + fromDist + '/' 
                                                                                + toDist + '/'
                                                                                + fromDate + '/'
                                                                                + toDate + '/'
                                                                                + '?apikey=' + config.ApiKey);
        return retVal;
    },
    getCountries: async (language) => {
        let retVal = await got.default.get(config.ApiUrl + '/reference/v1.0/countries/'+language+ '/' + '?apikey=' + config.ApiKey);
        return retVal;
    },
    getLanguages: async () => {
        let retVal = await got.default.get(config.ApiUrl + '/reference/v1.0/locales/?apikey='+ config.ApiKey);
        return retVal;
    },
    getCurrencies: async () =>{
        let retVal = await got.default.get(config.ApiUrl + '/reference/v1.0/currencies/?apikey='+ config.ApiKey);
        return retVal;
>>>>>>> 6e6ab90d72f661486b1d0c42f5b8d31eaba7f52a
    }
}