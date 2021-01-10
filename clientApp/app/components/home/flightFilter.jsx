import React from 'react';
import {Link} from 'react-router-dom';
import FromDestination from '../../components/home/destination';
import ToDestination from '../../components/home/destination';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

export default class flightFilter extends React.Component {

    constructor(){
        super();
    }

    onCabinClassChange = (e) => {
        this.props.onCabinClassChange(e.target.value);
    }

    onSelectAdults = (e) => {
        this.props.onSelectAdults(e.target.value);
    }

    onSelectChildren = (e) => {
        this.props.onSelectChildren(e.target.value);
    }

    onSelectInfants = (e) => {
        this.props.onSelectInfants(e.target.value);
    }

    render(){
        let fromPlaces = this.props.fromPlaces;
        let toPlaces = this.props.toPlaces;
        let cabinClasses = this.props.cabinClasses;
        let depetureMinDate = new Date();
        let depetureMaxDate = moment(new Date()).add(3, 'year');
        let fromDate = this.props.fromDate;
        let toDate = this.props.toDate;
        let arrivalMinDate = fromDate;
        let arrivalMaxDate = depetureMaxDate;
        let fromDestinationName = this.props.fromDestinationName;
        let fromDestinationKeyword = this.props.fromDestinationKeyword;
        let toDestinationName = this.props.toDestinationName;
        let toDestinationKeyword = this.props.toDestinationKeyword;
        let adults = this.props.adults;
        let children = this.props.children;
        let infants = this.props.infants;

        return(
            <div>
                <select onChange={this.onCabinClassChange}>
                    <option value="">select a cabin class</option>
                    {Object.keys(cabinClasses).map(key => {
                        return (
                            <option key={key} value={key}>{cabinClasses[key]}</option>
                        )
                    })}
                </select>
                <FromDestination onChange={this.props.onFromDestinationChange} 
                                 onSelect={this.props.onFromDistinationSelect}
                                 value={fromDestinationName}
                                 keyword={fromDestinationKeyword}
                                 places={fromPlaces} />
                <ToDestination onChange={this.props.onToDestinationChange} 
                                onSelect={this.props.onToDistinationSelect}
                                value={toDestinationName}
                                keyword={toDestinationKeyword}
                                 places={toPlaces} />
                <DatePicker className="" 
                            placeholderText={'select depeture date'}
                            minDate={depetureMinDate} 
                            maxDate={depetureMaxDate}  
                            selected={fromDate} 
                            onChange={this.props.onFromDateChange}/>
                <DatePicker className="" 
                            placeholderText={'select arrival date'}
                            minDate={arrivalMinDate} 
                            maxDate={arrivalMaxDate}  
                            selected={toDate} 
                            onChange={this.props.onToDateChange}/>
                <input type="text" onKeyUp={e => this.onSelectAdults(e)} />
                <input type="text" onKeyUp={e => this.onSelectChildren(e)} />
                <input type="text" onKeyUp={e => this.onSelectInfants(e)} />
                <Link to={'/flights'} onClick={this.props.findFlights}>Find flights</Link>
            </div>
        );
    }

}