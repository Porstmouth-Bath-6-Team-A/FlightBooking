import {EventEmitter} from 'events';
import dispatcher from '../dispatchers/dispatcher';
import {flightEvents} from '../enums/events';
import {flightActions} from '../enums/actions';
import $ from 'jquery';

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
        $.post(this._getFlightsURL, {

        }, (data) => {
            this._flights = data;
            this.emit(flightEvents.GET_FLIGHTS_DONE);
        });
    }

    getPlacesData = () => {
        $.get(this._getPlacesURL, (data) => {
            this._places = data;
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