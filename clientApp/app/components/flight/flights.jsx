import React from 'react';
import flightStore from '../../stores/flightStore';
import flightServices from '../../services/flightServices';
import {flightEvents} from '../../enums/events';
import Flight from '../flight/flight';

export default class flights extends React.Component {

    constructor(){
        super();

        this.pageSize = 10;
        this.flightCount = 0;
        this.flightSorting = flightServices.getFlightSorting();

        this.state = {
            currentPage: 1,
            flightSorting: this.flightSorting[0],
            isLoading: true
        };
    }

    componentDidMount() {
        flightStore.on(flightEvents.GET_FLIGHTS_DONE, this.updateComponent);
    }

    componentWillUnmount() {
        flightStore.off(flightEvents.GET_FLIGHTS_DONE, this.updateComponent);
    }

    updateComponent = () => {
        this.flightCount = flightServices.getFlightCount();
        
        this.setState({
            isLoading: false
        });
    }

    goFirst = () => {
        this.setState({
            currentPage: 1
        });
    }

    goEnd = () => {
        this.setState({
            currentPage: Math.ceil(this.flightCount / this.pageSize)
        });
    }

    goPrevious = () => {
        this.setState({
            currentPage: this.state.currentPage == 1 ? 1 : this.state.currentPage - 1
        });
    }

    goNext = () => {
        let pageCanGo = Math.ceil(this.flightCount / this.pageSize);
        this.setState({
            currentPage: pageCanGo == this.state.currentPage ? pageCanGo : this.state.currentPage + 1
        });
    }

    onChangeFlightSorting = (e) => {
        this.setState({
            flightSorting: e.target.value
        });
    }

    render(){
        let flights = flightServices.getFlights(this.state.currentPage, this.pageSize, this.state.flightSorting);

        return(
            <React.Fragment>
                <select onChange={this.onChangeFlightSorting}>
                    {Object.keys(this.flightSorting).map(key => {
                        return <option key={key} value={this.flightSorting[key]}>{this.flightSorting[key]}</option>
                    })}
                </select>
                {flights.map(flight => 
                    <Flight key={flight.id} flight={flight}></Flight>
                )}
                <br />
                <input type="button" onClick={this.goFirst} value="<<" />
                <input type="button" onClick={this.goPrevious} value="<" />
                <input type="button" onClick={this.goNext} value=">" />
                <input type="button" onClick={this.goEnd} value=">>" />
            </React.Fragment>
        );
    }

}