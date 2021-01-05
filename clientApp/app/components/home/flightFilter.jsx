import React from 'react';

export default class flightFilter extends React.Component {

    constructor(){
        super();
    }

    render(){
        let places = this.props.places;
        let cabinClasses = this.props.cabinClasses;

        return(
            <div>
                <select onSelect={}>
                    {cabinClasses.map(cabin => {
                        return (
                            <option>{cabin}</option>
                        )
                    })}
                </select>
            </div>
        );
    }

}