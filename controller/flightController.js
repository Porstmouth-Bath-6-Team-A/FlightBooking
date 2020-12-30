const flightService = require('../services/flightService');

module.exports = {
    getFlights: async (req, res) => {
        let flights = await flightService.getFlights(req.body.cabinclass, req.body.country, req.body.currency, 
                                                     req.body.language, req.body.fromDist, req.body.toDist, 
                                                     req.body.fromDate, req.body.toDate, req.body.adults, 
                                                     req.body.children, req.body.infants);

        res.json(flights);
    },
    getPlaces: async (req, res) => {
        let places = await flightService.getPlaces();

        res.json(places);
    }
}