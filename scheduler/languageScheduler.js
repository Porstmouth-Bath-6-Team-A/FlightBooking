const flightService = require("../services/flightService");
const dbHelper = require('../helper/dbHelper');
const common = require('../enums/common');

class languageScheduler {

    constructor() {
        this.timer = null;
	}
	
    async _service () {
        try {
            await dbHelper.delete(common.dbCollections.language,{});

			let language = await flightService.getLanguages();
			language = JSON.parse(language).Locales;
			
            await dbHelper.insert(common.dbCollections.language,language);
        } catch(error) {
            console.log(error);
        }
    }
    async start(interval = 60000){
        console.log('Language Scheduler start with ' + interval + 'interval');

        await this._service();

        this.timer = setInterval(async() => { 
            await this._service();
            console.log('Language Scheduler run on interval');
        },interval);
    }
    stop(){
        clearInterval(this.timer);
        this.timer =null;
    }
}
const la = new languageScheduler();
//la is languages
module.exports = {
    start: async (interval)  => {
        la.start();
    },
    stop: () => {
        la.stop;
    }
}
