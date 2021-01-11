import React from 'react';
import moment from 'moment';

export default class flights extends React.Component {

    constructor(){
        super();
    }

    onGoFlightDetail = () => {
        window.location.hash = '#/flights/detail/' + this.props.flight.id;
    }

    getTimeFromMins = (mins) => {
        let h = mins / 60 | 0,
            m = mins % 60 | 0;
        return h + ' Hours ' + m + ' Minutes';
    }

    getStops = (stops) => {
        let stopArr = [];

        stops.map(stop => {
            stopArr.push(stop.toDestination.code);
        });

        return stopArr.join(",");
    }

    render(){
        let flight = this.props.flight;
        let totalDepetureDuration = this.getTimeFromMins(flight.outbound.duration);
        let totalReturnDuration = this.getTimeFromMins(flight.inbound.duration);
        let depetureStops = flight.outbound.stops.length;
        let returnStops = flight.inbound.stops.length;
        let depetureStopsCodes = this.getStops(flight.outbound.stops);
        let returnStopsCodes = this.getStops(flight.inbound.stops);
        let depetureTime = moment(flight.outbound.depature).format("HH:MM");
        let arrivalTime = moment(flight.outbound.arrival).format("HH:MM");
        let returnDepetureTime = moment(flight.inbound.depature).format("HH:MM");
        let returnArrivalTime = moment(flight.inbound.arrival).format("HH:MM");
        let depetureCode = flight.outbound.fromDestination.code;
        let arrivalCode = flight.outbound.toDestination.code;
        let returnDepetureCode = flight.inbound.fromDestination.code;
        let returnArrivalCode = flight.inbound.toDestination.code;
        let depetureName = flight.outbound.fromDestination.name;
        let arrivalName = flight.outbound.toDestination.name;
        let returnDepetureName = flight.inbound.fromDestination.name;
        let returnArrivalName = flight.inbound.toDestination.name;

        return(
            <div className="tp-flight-plan" onClick={this.onGoFlightDetail}>
                <div className="container-fluid">
                    <div className="crop depart">
                        <div className="context collapsed" data-toggle="collapse" data-target="#demo2">
                            <div className="item it-1">
                                <label className="trip-type depart">Departure</label>
                                <div className="route-dot">
                                    <span className="point" ></span>
                                    <span className="point" ></span>
                                </div>
                                <div className="airline-image">
                                    <div className="df-text">{totalDepetureDuration}</div>
                                    <span className="img-wrapper">
                                        <svg className="anime-airplane">
                                            <use xlinkHref="#airplane"></use>
                                        </svg>
                                        {depetureStops == 1 &&
                                            <span className="top-label">Direct</span>
                                        }
                                        {depetureStops != 1 &&
                                            <span className="top-label has-stops">
                                                {depetureStops} Stops &nbsp; 
                                                <span className="stops">{depetureStopsCodes}</span>
                                            </span>
                                        }
                                    </span>
                                </div>
                                <div className="port-seg">
                                    <div className="flight-seg origin">
                                        <div className="time">{depetureTime}</div>
                                        <div className="port">{depetureCode}</div>
                                        <div className="name">{depetureName}</div>
                                    </div>
                                    <div className="flight-seg destination">
                                        <div className="time">{arrivalTime}</div>
                                        <div className="port">{arrivalCode}</div>
                                        <div className="name">{arrivalName}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="crop depart">
                        <div className="context collapsed" data-toggle="collapse" data-target="#demo">
                            <div className="item it-1">
                                <label className="trip-type depart">Return</label>
                                <div className="airline-image">
                                    <div className="df-text">{totalReturnDuration}</div>
                                    <span className="img-wrapper">
                                        <svg className="anime-airplane">
                                            <use xlinkHref="#airplane"></use>
                                        </svg>
                                        {returnStops == 1 &&
                                            <span className="top-label">Direct</span>
                                        }
                                        {returnStops != 1 &&
                                            <span className="top-label has-stops">
                                                {returnStops} Stops &nbsp;
                                                <span className="stops">{returnStopsCodes}</span>
                                            </span>
                                        }
                                    </span>
                                </div>
                                <div className="port-seg">
                                    <div className="flight-seg origin">
                                        <div className="time">{returnDepetureTime}</div>
                                        <div className="port">{returnDepetureCode}</div>
                                        <div className="name">{returnDepetureName}</div>
                                    </div>
                                    <div className="flight-seg destination">
                                        <div className="time">{returnArrivalTime}</div>
                                        <div className="port">{returnArrivalCode}</div>
                                        <div className="name">{returnArrivalName}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}