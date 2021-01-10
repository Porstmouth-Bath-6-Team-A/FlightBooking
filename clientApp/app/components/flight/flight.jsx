import React from 'react';

export default class flights extends React.Component {

    constructor(){
        super();
    }

    onGoFlightDetail = () => {
        window.location.hash = '#/flights/detail/' + this.props.flight.id;
    }

    render(){
        let flight = this.props.flight;

        return(
            <div style={{border: "1px solid red"}} onClick={this.onGoFlightDetail}>
                {JSON.stringify(flight)}
                <br />
            </div>
        );
    }

}