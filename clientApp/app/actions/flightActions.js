import dispatcher from "../dispatchers/dispatcher";
import {flightActions} from '../enums/actions';

export function getFlights(){
    dispatcher.dispatch({
        type: flightActions.GET_FLIGHTS, 
        data: {
            
        }
    });
}

export function getPlaces(){
    dispatcher.dispatch({
        type: flightActions.GET_PLACES, 
        data: {            
        }
    });
}