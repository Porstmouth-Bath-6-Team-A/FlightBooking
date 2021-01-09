import React from 'react';
import flightServices from '../../services/flightServices';
import FlightFilter from '../home/flightFilter';
import * as flightActions from '../../actions/flightActions';

export default class home extends React.Component {

    constructor(){
        super();

        this.state = {
            fromDestinationCode: null,
            fromDestinationName: null,
            fromDestinationKeyword: '',
            toDestinationCode: null,
            toDestinationName: null,
            toDestinationKeyword: '',
            fromDate: null,
            toDate: null,
            cabinclass: null,
            adults: 1,
            children: 0,
            infants: 0
        }
    }

    getCabinClasses = () => {
        return flightServices.getCabinClasses();
    }

    getPlaces = (place) => {
        return flightServices.getPlaces(place);
    }

    onFromDestinationChange = (destination) => {
        this.setState({
            fromDestinationKeyword: destination,
            fromDestinationCode: null,
            fromDestinationName: null
        });
    }

    onToDestinationChange = (destination) => {
        this.setState({
            toDestinationKeyword: destination,
            toDestinationCode: null,
            toDestinationName: null
        });
    }

    onFromDateChange = (date) => {
        this.setState({
            fromDate: date
        });
    }

    onToDateChange = (date) => {
        this.setState({
            toDate: date
        });
    }

    onFromDistinationSelect = (key, value) => {
        this.setState({
            fromDestinationKeyword: '',
            fromDestinationCode: key,
            fromDestinationName: value
        });
    }

    onToDistinationSelect = (key, value) => {
        this.setState({
            toDestinationKeyword: '',
            toDestinationCode: key,
            toDestinationName: value
        });
    }

    onCabinClassChange = (cabinclass) => {
        this.setState({
            cabinclass: cabinclass
        });
    }

    onSelectAdults = (adult) => {
        this.setState({
            adults: adult
        })
    }

    onSelectChildren = (children) => {
        this.setState({
            children: children
        })
    }

    onSelectInfants = (infants) => {
        this.setState({
            infants: infants
        })
    }

    findFlights = () => {
        flightActions.findFlights()
    }

    render(){
        let cabinClasses = this.getCabinClasses();
        let fromPlaces = this.getPlaces(this.state.fromDestinationKeyword);
        let toPlaces = this.getPlaces(this.state.toDestinationKeyword);
        let fromDate = this.state.fromDate;
        let fromDestinationName = this.state.fromDestinationName;
        let toDestinationName = this.state.toDestinationName;
        let fromDestinationKeyword = this.state.fromDestinationKeyword;
        let toDestinationKeyword = this.state.toDestinationKeyword;
        let toDate = this.state.toDate;
        let adults = this.state.adults;
        let children = this.state.children;
        let infants = this.state.infants;

        return(
            <FlightFilter cabinClasses={cabinClasses}
                          fromPlaces={fromPlaces}
                          onFromDestinationChange={this.onFromDestinationChange}
                          onFromDistinationSelect={this.onFromDistinationSelect}
                          fromDestinationName={fromDestinationName}
                          toPlaces={toPlaces}
                          onToDestinationChange={this.onToDestinationChange}
                          onToDistinationSelect={this.onToDistinationSelect}
                          fromDestinationKeyword={fromDestinationKeyword}
                          toDestinationKeyword={toDestinationKeyword}
                          toDestinationName={toDestinationName}
                          fromDate={fromDate}
                          toDate={toDate}
                          adults={adults}
                          children={children}
                          infants={infants}
                          onSelectAdults={this.onSelectAdults}
                          onSelectChildren={this.onSelectChildren}
                          onSelectInfants={this.onSelectInfants}
                          findFlights={this.findFlights}
                          onCabinClassChange={this.onCabinClassChange}
                          onToDateChange={this.onToDateChange}
                          onFromDateChange={this.onFromDateChange} />
        );
    }

}