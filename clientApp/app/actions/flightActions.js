import dispatcher from "../dispatchers/dispatcher";
import {flightActions} from '../enums/actions';

export function getFlights(cabinclass, fromDist, toDist, fromDate, toDate, adults, children, infants){
    dispatcher.dispatch({
        type: flightActions.GET_FLIGHTS, 
        data: {
            cabinclass: cabinclass,
            fromDist: fromDist,
            toDist: toDist,
            fromDate: fromDate,
            toDate: toDate,
            adults: adults,
            children: children,
            infants: infants
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

export function setBooking(paymentRef, flight, emailAddress){
    dispatcher.dispatch({
        type: flightActions.SET_BOOKING, 
        data: {
            paymentRef: paymentRef,
            flight: flight,
            emailAddress: emailAddress
        }
    });
}

export function getBooking(emailAddress){
    dispatcher.dispatch({
        type: flightActions.GET_BOOKING, 
        data: {
            emailAddress: emailAddress
        }
    });
}