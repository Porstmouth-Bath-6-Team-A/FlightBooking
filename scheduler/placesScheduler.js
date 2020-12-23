const flightService = require("../services/flightService");
const dbHelper = require('../helper/dbHelper');
const common = require('../enums/common');

class placeScheduler {

    constructor() {
        this.timer = null;
    }

    async _service () {
        try {
            await dbHelper.delete(common.dbCollections.place, {});

            let places = await flightService.getPlaces();
            places = JSON.parse(places).Continents;

            await dbHelper.insert(common.dbCollections.place, places);
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
        pl.start();
    },
    stop: () => {
        pl.stop;
    }
}



