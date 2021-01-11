import React from 'react';
import flightServices from '../../services/flightServices';
import PaypalButton from '../common/paypalButton';
import {currency} from '../../enums/common';
import {flightEvents} from '../../enums/events';
import * as flightActions from '../../actions/flightActions';
import flightStore from '../../stores/flightStore';
import Navigation from '../../components/common/navigation';
import Footer from '../../components/common/footer';
import moment from 'moment';

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

    getTimeFromMins = (mins) => {
        let h = mins / 60 | 0,
            m = mins % 60 | 0;
        return h + ' Hours ' + m + ' Minutes';
    }

    render(){
        let fromName = this.flight.outbound.fromDestination.name;
        let toName = this.flight.outbound.toDestination.name;
        let currentDateTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
        console.log(this.flight);

        return(
            <React.Fragment>
                <Navigation />
                <div className="flight-detail wrapper">
                    <div className="header">
                        <h1 className="header-title">From {fromName} to</h1>
                        <h1 className="header-hero">{toName}</h1>
                    </div>
                    <div className="body">
                        <div className="flight-details">
                            <div className="row space-between">
                                <span className="flight-detail-text">{currentDateTime}</span>
                            </div>
                            <div className="row">
                                <span className="flight-detail-text">Depature</span>
                            </div>
                        </div>
                        {this.flight.outbound.stops.map(stop => {
                            return (
                                <div className="flight-brief">
                                    <div className="row space-between">
                                        <div className="col">
                                            <div className="row">
                                                <p className="flight-brief-text accent-bold">
                                                    {stop.flight.Number} <br /> {stop.flight.Name}
                                                    <img className="flight-brief-icon" src={stop.flight.ImgUrl} />
                                                </p>
                                                <div className="flight-brief-origin">
                                                    <p className="flight-brief-text accent-bold">{moment(stop.depature).format("HH:MM")}</p>
                                                    <p className="flight-brief-text accent-bold">{stop.fromDestination.code} ({stop.fromDestination.name})</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <img className="flight-brief-icon" src="https://i.imgur.com/JpI6pXU.png" />
                                            <p className="flight-brief-subtext">{this.getTimeFromMins(stop.duration)}<br /></p>
                                        </div>
                                        <div className="col">
                                            <p className="flight-brief-text accent-bold">{moment(stop.arrival).format("HH:MM")}</p>
                                            <p className="flight-brief-text accent-bold">{stop.toDestination.code} ({stop.toDestination.name})</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="body">
                        <div className="flight-details">
                            <div className="row space-between">
                                <span className="flight-detail-text">{currentDateTime}</span>
                            </div>
                            <div className="row">
                                <span className="flight-detail-text">Arrival</span>
                            </div>
                        </div>
                        {this.flight.inbound.stops.map(stop => {
                            return (
                                <div className="flight-brief">
                                    <div className="row space-between">
                                        <div className="col">
                                            <div className="row">
                                                <p className="flight-brief-text accent-bold">
                                                    {stop.flight.Number} + {stop.flight.Name}
                                                    <img className="flight-brief-icon" src={stop.flight.ImgUrl} />
                                                </p>
                                                <div className="flight-brief-origin">
                                                    <p className="flight-brief-text accent-bold">{moment(stop.depature).format("HH:MM")}</p>
                                                    <p className="flight-brief-text accent-bold">{stop.fromDestination.code} ({stop.fromDestination.name})</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <img className="flight-brief-icon" src="https://i.imgur.com/JpI6pXU.png" />
                                            <p className="flight-brief-subtext">{this.getTimeFromMins(stop.duration)}<br /></p>
                                        </div>
                                        <div className="col">
                                            <p className="flight-brief-text accent-bold">{moment(stop.arrival).format("HH:MM")}</p>
                                            <p className="flight-brief-text accent-bold">{stop.toDestination.code} ({stop.toDestination.name})</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="footer">
                        <div className="row">
                            <div className="footer-content">
                                <div className="row space-between">
                                    <h4 className="footer-content-heading">Price</h4>
                                    <h5 className="footer-content-text accent-bold">$ {this.flight.price}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PaypalButton amount={this.flight.price}
                                  currency={currency}
                                  onSuccess={this.onSuccess} />
                    <div className="footer-end">
                        <h4 className="footer-end-text">Thank you for flying with us!</h4>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }

}