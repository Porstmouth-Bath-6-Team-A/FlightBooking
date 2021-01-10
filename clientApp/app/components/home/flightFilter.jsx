import React from 'react';
import {Link} from 'react-router-dom';
import FromDestination from '../../components/home/destination';
import ToDestination from '../../components/home/destination';
import Navigation from '../../components/common/navigation';
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
            <React.Fragment>
                <Navigation />
                <header id="gtco-header" className="gtco-cover gtco-cover-md" role="banner" style={{backgroundImage: 'url(./assets/images/img_bg_2.jpg)', height: "1200px"}}>
                    <div className="overlay"></div>
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 text-left">
                                <div className="row row-mt-15em">
                                    <div className="col-md-7 mt-text">
                                        <h1>Book your flight with FlightBookr now</h1>	
                                    </div>
                                    <div className="col-md-4 col-md-push-1">
                                        <div className="form-wrap">
                                            <div className="tab">
                                                <div className="tab-content">
                                                    <div className="tab-content-inner active" data-content="signup">
                                                        <h3>Book Your Trip</h3>
                                                        <div className="row form-group">
                                                            <div className="col-md-12">
                                                                <label for="activities">Departure</label>
                                                                <FromDestination onChange={this.props.onFromDestinationChange} 
                                                                    onSelect={this.props.onFromDistinationSelect}
                                                                    value={fromDestinationName}
                                                                    keyword={fromDestinationKeyword}
                                                                    places={fromPlaces} />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col-md-12">
                                                                <label for="destination">Destination</label>
                                                                <ToDestination onChange={this.props.onToDestinationChange} 
                                                                    onSelect={this.props.onToDistinationSelect}
                                                                    value={toDestinationName}
                                                                    keyword={toDestinationKeyword}
                                                                    places={toPlaces} />
                                                            </div>
                                                        </div>                                                    
                                                        <div className="row form-group">
                                                            <div className="col-md-12">
                                                                <label for="date-start">Departure Date</label>
                                                                <DatePicker className="form-control" 
                                                                            placeholderText={'select depeture date'}
                                                                            minDate={depetureMinDate} 
                                                                            maxDate={depetureMaxDate}  
                                                                            selected={fromDate} 
                                                                            onChange={this.props.onFromDateChange}/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col-md-12">
                                                                <label for="date-start">Return Date</label><br />
                                                                <DatePicker className="form-control" 
                                                                            placeholderText={'select arrival date'}
                                                                            minDate={arrivalMinDate} 
                                                                            maxDate={arrivalMaxDate}  
                                                                            selected={toDate} 
                                                                            onChange={this.props.onToDateChange}/>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col-md-12">
                                                                <label for="destination">Adults</label>
                                                                <select onChange={e => this.onSelectAdults(e)} className="form-control">
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col-md-12">
                                                                <label for="destination">Children</label>
                                                                <select onChange={e => this.onSelectChildren(e)} className="form-control">
                                                                    <option value="0">0</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col-md-12">
                                                                <label for="destination">Cabin Class</label>
                                                                <select className="form-control" onChange={this.onCabinClassChange}>
                                                                    <option value="">select a cabin className</option>
                                                                    {Object.keys(cabinClasses).map(key => {
                                                                        return (
                                                                            <option key={key} value={key}>{cabinClasses[key]}</option>
                                                                        )
                                                                    })}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col-md-12">
                                                                <Link to={'/flights'} style={{color: 'white'}} className="btn btn-primary btn-block" onClick={this.props.findFlights}>Find flights</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }

}