import React from 'react';

export default class cabinClasses extends React.Component {

    constructor(){
        super();

        this.state = {
            
        }
    }

    render(){
        let cabinClasses = this.props.cabinClasses;

        return(
            <React.Fragment>
                <select onSelect={}>
                    {cabinClasses.map(cabin => {
                        return (
                            <option></option>
                        )
                    })}
                </select>
            </React.Fragment>
        );
    }

}