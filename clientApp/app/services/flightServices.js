import {cabinClasses} from '../enums/common';
import flightStore from '../stores/flightStore';

class flightServices {

    getCabinClasses = () => {
        return cabinClasses;
    }

    getFlights = () => {
        return flightStore.getFlights();
    }

    getPlaces = () => {
        return flightStore.getPlaces();
    }

}

const _flightServices = new flightServices();
export default _flightServices;