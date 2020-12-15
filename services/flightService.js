let flightApi = require('../dataAccess/flightApi');

module.exports = {
    getPlaces: async () => {
        return await flightApi.getPlaces();
    }
}