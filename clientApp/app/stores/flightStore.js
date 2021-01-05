import {EventEmitter} from 'events';
import dispatcher from '../dispatchers/dispatcher';
import {flightEvents} from '../enums/events';
import {flightActions} from '../enums/actions';

class flightStore extends EventEmitter {
    constructor(){
        super();
        
        this._getFlightsURL = '/flights';
        this._getPlacesURL = '/places';

        this._flights = [];
        this._places = [];

        dispatcher.register(this._handleActions);
    }

    getFlightsData = () => {
        fetch(this._getFlightsURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({test: 33445})
        }).then(response => {
            this._flights = response.json();
            this.emit(flightEvents.GET_FLIGHTS_DONE);
        });
    }

    getPlacesData = () => {
        fetch(this._getPlacesURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({test: 33445})
        }).then(response => {
            this._places = response.json();
            this.emit(flightEvents.GET_PLACES_DONE);
        });
    }

    _handleActions = (action) => {
        switch (action.type) {
            case flightActions.GET_FLIGHTS:
                this.getFlightsData();
                break;
            case flightActions.GET_PLACES:
                this.getPlacesData();
                break;
        }
    }

    getFlights = () => {
        return this._flights;
    }

    getPlaces = () => {
        return this._places;
    }

}

const _flightStore = new flightStore();
export default _flightStore;