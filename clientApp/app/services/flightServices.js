import {cabinClasses} from '../enums/common';
import flightStore from '../stores/flightStore';

class flightServices {

    getCabinClasses = () => {
        return cabinClasses;
    }

    getFlights = () => {
        return flightStore.getFlights();
    }

    getPlaces = (place) => {
        if (place == null || place == '') {
            return [];
        } else {                
            let places = flightStore.getPlaces();
  
            let filteredPlaces = places.reduce((current, next) => {
                if (next.airportName.toLowerCase().search(place.toLowerCase()) > -1) {
                    current.push(next);
                }

                return current;
            }, []);

          return filteredPlaces;
        }
    }

}

const _flightServices = new flightServices();
export default _flightServices;