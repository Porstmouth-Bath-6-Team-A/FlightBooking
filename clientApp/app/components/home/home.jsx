import React from 'react';
import flightServices from '../../services/flightServices';
import flightStore from '../../stores/flightStore';
import flightFilter from '../home/flightFilter';

export default class home extends React.Component {

    constructor(){
        super();
    }

    getCabinClasses = () => {
        return flightServices.getCabinClasses();
    }

    getPlaces = () => {
        return flightServices.getPlaces();
    }

    render(){
        let cabinClasses = this.getCabinClasses();
        let places = this.getPlaces();

        return(
            <flightFilter cabinClasses={cabinClasses}
                          places={places} />
        );
    }

}