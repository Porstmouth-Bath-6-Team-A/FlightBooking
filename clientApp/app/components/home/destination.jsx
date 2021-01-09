import React from 'react';

export default class destination extends React.Component {

    constructor(){
        super();

        this.state = {
            value: ''
        }
    }

    onChange = (e) => {
        this.props.onChange(e.target.value);
    }

    onSelect = (key, value) => {
        this.props.onSelect(key, value);
    }

    render(){
        let places = this.props.places;
        let value = this.props.value;
        let keyword = this.props.keyword;

        return(
            <React.Fragment>
                <input type="text" onChange={this.onChange} value={value ? value : keyword} />
                {places.length > 0 &&
                    <div style={{border: '1px solid red', width: 300}}>
                        {places.map(place => 
                            <span onClick={() => {this.onSelect(place.airportCode, place.airportName)}} style={{display: 'block'}} key={place.airportCode}>{place.airportName}</span>
                        )}
                    </div>
                }
            </React.Fragment>
        );
    }

}