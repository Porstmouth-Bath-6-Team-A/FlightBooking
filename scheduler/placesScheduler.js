const flightService = require("../services/flightService");
const flightData = require("../dataAccess/flightData");

class placeScheduler {

    constructor() {
        this.timer = null;
    }

    async _service () {
        try {
            let rawPlaces = await flightService.getRawPlaces();
            rawPlaces = rawPlaces.Continents;

            let places = rawPlaces.map(continent => {
                let place = {};
                continent.Countries.map(country => {
                    country.Cities.map(city => {
                        city.Airports.map(airport => {
                            place = {
                                countryName: country.Name,
                                cityName: city.Name,
                                airportName: airport.Name,
                                airportCode: airport.Id 
                            }
                        });
                    });
                });

                return place;
            });

            await flightData.deletePlaces();
            await flightData.setPlaces(places);
        } catch(error) {
            console.log(error);
        }
    
    }

    async start(interval = 60000) {
        console.log('Place Scheduler starts with ' + interval + ' interval');

        await this._service();

        this._timer = setInterval(async () => {
            await this._service();
            console.log('Place Scheduler run on interval');
        }, interval);
    }

    stop() {
        clearInterval(this._timer);
        this._timer = null;
    }

}

const pl = new placeScheduler();

module.exports = {
    start: async (interval)  => {
        pl.start(interval);
    },
    stop: () => {
        pl.stop;
    }
}



