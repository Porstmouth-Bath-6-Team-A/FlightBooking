const got = require('got');
const config = require('../config.json');

module.exports = {
    getPlaces: async () => {
        let retVal = await got.default.get(config.ApiUrl + '/geo/v1.0?apikey=' + config.ApiKey);
        return retVal;
    },
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
    }
}