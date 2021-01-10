import {EventEmitter} from 'events';
import dispatcher from '../dispatchers/dispatcher';
import {flightEvents} from '../enums/events';
import {flightActions} from '../enums/actions';
import $ from 'jquery';
import {country, currency, language} from '../enums/common';

class flightStore extends EventEmitter {
    constructor(){
        super();
        
        this._getFlightsURL = '/flights';
        this._getPlacesURL = '/places';
        this._setBookingURL = '/booking';
        this._getBookingURL = '/booking';

        this._flights = [];
        this._places = [];
        this._booking = [];

        dispatcher.register(this._handleActions);
    }

    getFlightsData = (cabinclass, fromDist, toDist, fromDate, toDate, adults, children, infants) => {
        $.ajax({
			method: "POST",
			url: this._getFlightsURL,
			data: JSON.stringify({
				cabinclass: cabinclass,
				country: country,
				currency: currency,
				language: language,
				fromDist: fromDist,
                toDist: toDist,
                fromDate: fromDate,
                toDate: toDate,
                adults: adults,
                children: children,
                infants: infants
			}),
			dataType: 'json',
			contentType: 'application/json; charset=UTF-8',
			success: (data) => {
				this._flights = this._formatFlight(data.StatusDesc);
                this.emit(flightEvents.GET_FLIGHTS_DONE);
			},
			error: (err) => {
				console.log(err);
			}
		});
    }

    getPlacesData = () => {
        $.get(this._getPlacesURL, (data) => {
            this._places = data.StatusDesc;
            this.emit(flightEvents.GET_PLACES_DONE);
        });
    }

    setBookingData = (paymentRef, flight, emailAddress) => {
        $.ajax({
			method: "POST",
			url: this._setBookingURL,
			data: JSON.stringify({
                paymentRef: paymentRef,
				flight: flight,
				emailAddress: emailAddress
			}),
			dataType: 'json',
			contentType: 'application/json; charset=UTF-8',
			success: (data) => {
                this.emit(flightEvents.SET_BOOKING_DONE);
			},
			error: (err) => {
				console.log(err);
			}
		});
    }

    getBookingData = (emailAddress) => {
        $.ajax({
			method: "GET",
			url: this._getBookingURL,
			data: JSON.stringify({
				emailAddress: emailAddress
			}),
			dataType: 'json',
			contentType: 'application/json; charset=UTF-8',
			success: (data) => {
                this._booking = data.StatusDesc;
                this.emit(flightEvents.GET_BOOKING_DONE);
			},
			error: (err) => {
				console.log(err);
			}
		});
    }

    _handleActions = (action) => {
        switch (action.type) {
            case flightActions.GET_FLIGHTS:
                this.getFlightsData(
                    action.data.cabinclass, 
                    action.data.fromDist, 
                    action.data.toDist, 
                    action.data.fromDate, 
                    action.data.toDate, 
                    action.data.adults, 
                    action.data.children, 
                    action.data.infants
                );
                break;
            case flightActions.GET_PLACES:
                this.getPlacesData();
                break;
            case flightActions.SET_BOOKING:
                this.setBookingData(
                    action.data.paymentRef,
                    action.data.flight,
                    action.data.emailAddress
                );
                break;
            case flightActions.GET_BOOKING:
                this.getBookingData(action.data.emailAddress);
                break;
        }
    }

    getFlights = () => {
        return this._flights;
    }

    getPlaces = () => {
        return this._places;
    }

    getBooking = () => {
        return this._booking;
    }

    _formatFlight = (flights) => {
        let formattedFlights = [];
        
        flights.map((flight, index) => {
            let formattedFlight = {};
            let inbounds = flight.inbounds;
            let outbounds = flight.outbounds;

            outbounds.map(outbound => {
                inbounds.map(inbound => {
                    formattedFlight = {
                        id: index,
                        price: flight.price,
                        outbound: outbound,
                        inbound: inbound
                    }
                });
            });

            formattedFlights.push(formattedFlight);
        });

        return formattedFlights;
    }

}

const _flightStore = new flightStore();
export default _flightStore;