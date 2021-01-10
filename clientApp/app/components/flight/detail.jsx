import React from 'react';
import flightServices from '../../services/flightServices';
import PaypalButton from '../common/paypalButton';
import {currency} from '../../enums/common';
import {flightEvents} from '../../enums/events';
import * as flightActions from '../../actions/flightActions';
import flightStore from '../../stores/flightStore';

export default class flights extends React.Component {

    constructor(props){
        super();

        this.flight = flightServices.getFlight(parseInt(props.match.params.id));;
    }

    componentDidMount() {
        flightStore.on(flightEvents.SET_BOOKING_DONE, this._setBookingDone);
    }

    componentWillUnmount() {
        flightStore.off(flightEvents.SET_BOOKING_DONE, this._setBookingDone);
    }

    _setBookingDone = () => {
        window.location.hash = '#/booking';
    }

    onSuccess = (detail, data) => {
        flightActions.setBooking(detail.id, this.flight, '');
    }

    render(){
        return(
            <div>
                {JSON.stringify(this.flight)}
                <PaypalButton amount={this.flight.price}
                              currency={currency}
                              onSuccess={this.onSuccess} />
            </div>
        );
    }

}