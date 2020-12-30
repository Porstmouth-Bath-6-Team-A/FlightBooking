let flightApi = require('../dataAccess/flightApi');
let flightData = require('../dataAccess/flightData');
const config = require('../config.json');

module.exports = {
    getRawPlaces: async () => {
        return await flightApi.getPlaces();   
    },
    getPlaces: async () => {
        return await flightData.getPlaces();  
    },
    deletePlaces: async () => {
        return await flightData.deletePlaces();  
    },
    setPlaces: async (places) => {
        return await flightData.setPlaces(places);  
    },
    getFlights: async(cabinclass, country, currency, language, fromDist, toDist, fromDate, toDate, adults, children, infants) => {
        let flights = await flightApi.getFlights(cabinclass, country, currency, language, fromDist, toDist, fromDate, toDate, adults, children, infants);
        let returnVal = [];

        flights.Itineraries.map(iti => {
            iti.PricingOptions.map(opt => {
                if (opt.Agents.find(o => o == config.AgentId)) {
                    let flight = {
                        price: opt.Price,
                        outbounds: [],
                        inbounds: []
                    };
                    for (let i = 0; i < 2; i++) {
                        let legs = flights.Legs.filter(leg => (leg.Id == iti.OutboundLegId && i == 0) || (leg.Id == iti.InboundLegId && i == 1));

                        legs.map(leg => {
                            let from = flights.Places.find(place => place.Id == leg.OriginStation);
                            let to = flights.Places.find(place => place.Id == leg.DestinationStation);

                            let bound = {
                                departure: leg.Departure,
                                arrival: leg.Arrival,
                                duration: leg.Duration,
                                fromDestination: {
                                    code: from.Code,
                                    name: from.Name
                                },
                                toDestination: {
                                    code: to.Code,
                                    name: to.Name
                                },
                                stops: []
                            };

                            leg.SegmentIds.map(id => {
                                let segment = flights.Segments.find(seg => seg.Id == id);
                                let fromSeg = flights.Places.find(place => place.Id == segment.OriginStation);
                                let toSeg = flights.Places.find(place => place.Id == segment.DestinationStation);
                                let carrier = flights.Carriers.find(carry => carry.Id == segment.Carrier);

                                bound.stops.push({
                                    departure: segment.DepartureDateTime,
                                    arrival: segment.ArrivalDateTime,
                                    duration: segment.Duration,
                                    fromDestination: {
                                        code: fromSeg.Code,
                                        name: fromSeg.Name
                                    },
                                    toDestination: {
                                        code: toSeg.Code,
                                        name: toSeg.Name
                                    },
                                    flight: {
                                        Number: segment.FlightNumber,
                                        Name: carrier.Name,
                                        ImgUrl: carrier.ImageUrl
                                    }
                                });
                            });

                            if (i == 0) {
                                flight.outbounds.push(bound);
                            } else {
                                flight.inbounds.push(bound);
                            }
                        });
                    }
                    returnVal.push(flight);
                }
            });
        });

        return returnVal;
    }
}