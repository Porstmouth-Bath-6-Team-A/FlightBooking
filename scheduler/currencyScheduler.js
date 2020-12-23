const flightService = require("../services/flightService");
const dbHelper = require('../helper/dbHelper');
const common = require('../enums/common');
const { getCurrencies, getCountries } = require("../dataAccess/flightApi");

class currencyScheduler {

    constructor() {
        this.timer = null;
	}
	
    async _service () {
        try {
            await dbHelper.delete(common.dbCollections.currency,{});

			let currency = await flightService.getCurrencies();
			currency = JSON.parse(currency).Currencies;
			
            await dbHelper.insert(common.dbCollections.currency, currency);
        } catch(error) {
            console.log(error);
        }
    }
    async start(interval = 60000){
        console.log('Currency Scheduler start with ' + interval + 'interval');

        await this._service();

        this.timer = setInterval(async() => { 
            await this._service();
            console.log('Currency Scheduler run on interval');
        },interval);
    }
    stop(){
        clearInterval(this.timer);
        this.timer =null;
    }
}
const Cur = new currencyScheduler();

module.exports = {
    start: async (interval)  => {
        Cur.start();
    },
    stop: () => {
        Cur.stop;
    }
}
