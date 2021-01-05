import {EventEmitter} from 'events';
import dispatcher from '../dispatchers/dispatcher';
import {flightEvents} from '../enums/events';
import {flightActions} from '../enums/actions';

class flightStore extends EventEmitter {
    constructor(){
        super();
        
        this._getFlightsURL = '/places';
        this._getPlacesURL = '/flights';

        this._flights = [];
        this._places = [];

        dispatcher.register(this._handleActions);
    }

    getFlights = () => {
        fetch(this._getFlightsURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {}
        }).then(response => {
            this._flights = response.json();
            this.emit(flightEvents.GET_FLIGHTS_DONE);
        });
    }

    getPlaces = () => {
        fetch(this._getPlacesURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {}
        }).then(response => {
            this._places = response.json();
            this.emit(flightEvents.GET_PLACES_DONE);
        });
    }

    _handleActions = (action) => {
        switch (action.type) {
            case flightActions.GET_FLIGHTS:
                this.getFlights();
                break;
            case flightActions.GET_PLACES:
                this.getPlaces();
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