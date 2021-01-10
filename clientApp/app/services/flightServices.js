import {cabinClasses} from '../enums/common';
import flightStore from '../stores/flightStore';
import {flightSorting} from '../enums/common';

class flightServices {

    getCabinClasses = () => {
        return cabinClasses;
    }

    getFlightCount = () => {
        let flights = flightStore.getFlights();

        return flights.length;
    }

    getFlight = (id) => {
        let flights = flightStore.getFlights().filter(flight => flight.id == id);

        return flights.length > 0 ? flights[0] : null;
    }

    getFlights = (currentPage, pageSize, sorting) => {
        let flights = flightStore.getFlights();

        if (sorting == flightSorting.cheap) {
            flights.sort((a, b) => {
                if (a.price > b.price){
                    return 1;
                }
                if (a.price < b.price){
                    return -1;
                }

                return 0;
            });
        } else if (sorting == flightSorting.fast) {
            flights.sort((a, b) => {
                if (a.inbound.duration + a.inbound.duration > b.inbound.duration + b.inbound.duration){
                    return 1;
                }
                if (a.inbound.duration + a.inbound.duration < b.inbound.duration + b.inbound.duration){
                    return -1;
                }

                return 0;
            });
        } else {
            flights.sort((a, b) => {
                if (a.id > b.id) return 1;
                if (a.id < b.id) return -1;
                return 0;
            });
        }

        return flights.slice((currentPage * pageSize) - pageSize, currentPage * pageSize);
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

    getFlightSorting = () => {
        return flightSorting;
    }

    getBooking = () => {
        return flightStore.getBooking();
    }

}

const _flightServices = new flightServices();
export default _flightServices;