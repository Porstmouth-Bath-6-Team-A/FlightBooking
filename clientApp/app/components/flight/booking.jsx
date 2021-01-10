import React from 'react';
import flightServices from '../../services/flightServices';
import {flightEvents} from '../../enums/events';
import * as flightActions from '../../actions/flightActions';
import flightStore from '../../stores/flightStore';

export default class flights extends React.Component {

    constructor(props){
        super();

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        flightStore.on(flightEvents.GET_BOOKING_DONE, this._getBookingDone);
        flightActions.getBooking('');
    }

    componentWillUnmount() {
        flightStore.off(flightEvents.GET_BOOKING_DONE, this._getBookingDone);
    }

    _getBookingDone = () => {
        this.state = {
            isLoading: false
        }
    }

    render(){
        let booking = flightServices.getBooking();

        return(
            <div>
                {JSON.stringify(booking)}
            </div>
        );
    }

}