import * as flightActions from './actions/flightActions';

class startApp {

    constructor(){
        flightActions.getPlaces();
    }

}

const _startApp = new startApp();
export default _startApp;