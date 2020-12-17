const got = require('got');
const config = require('../config.json');

module.exports = {
    getPlaces: async () => {
        let response = await got(config.ApiUrl + '/geo/v1.0?apikey=' + config.ApiKey);

        return response.body;
    },
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
    }
}