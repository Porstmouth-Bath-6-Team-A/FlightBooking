const got = require('got');
const config = require('../config.json');

module.exports = {
    getPlaces: async () => {
        let retVal = await got.default.get(config.ApiUrl + '/geo/v1.0?apikey=' + config.ApiKey);
        return retVal;
    },
    getFlightInfo: async () => {
        //let retVal = await got.default.get(config.ApiUrl + '/geo/v1.0?apikey=' + config.ApiKey);
        //return retVal;
    }
}