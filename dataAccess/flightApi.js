const got = require('got');
const config = require('../config.json');

module.exports = {
    getPlaces: async () => {
        let retVal = await got.default.get(config.ApiUrl + '/geo/v1.0?apikey=' + config.ApiKey);
        return retVal;
    },
    getFlightInfo: async () => {
        let retVal = await got.default.get(config.ApiUrl + '/v1/flights?apikey=' + config.ApiKey);
        return retVal;
    },
    getCountries: async () => {
        let retVal = await got.default.get(config.ApiUrl + '/v1/countries?apikey=' + config.ApiKey);
        return retVal;
    },
    getLocales: async () => {
        let retVal = await got.default.get(config.ApiUrl + '/v1.0/locales?apikey='+ config.ApiKey);
        return retVal;
    },
    getCurrencies: async () =>{
        let retVal = await got.default.get(config.ApiUrl + '/v1.0/currencies?apikey='+config.ApiKey);
        return retVal;
    }
}