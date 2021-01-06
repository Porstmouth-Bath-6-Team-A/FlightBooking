import React from 'react';
import Autocomplete from 'react-autocomplete';

export default class flightFilter extends React.Component {

    constructor(){
        super();
    }

    render(){
        let places = this.props.places;
        let cabinClasses = this.props.cabinClasses;

        return(
            <div>
                <select>
                    {Object.keys(cabinClasses).map(key => {
                        return (
                            <option key={key} value={key}>{cabinClasses[key]}</option>
                        )
                    })}
                </select>
            </div>
        );
    }

}