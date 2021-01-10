import React from 'react';
import * as flightActions from './actions/flightActions';
import flightStore from './stores/flightStore';
import {flightEvents} from './enums/events';
import $ from 'jquery';

export default class app extends React.Component{

    constructor(){
        super();

        this.state = {
            isReady: false
        };
    }

    componentDidMount() {
        flightStore.on(flightEvents.GET_PLACES_DONE, this.setRender);

        flightActions.getPlaces();
    }

    setRender = () => {
        flightStore.off(flightEvents.GET_PLACES_DONE, this.setRender);
        $('#loader').hide();
        this.setState({
            isReady: true
        });
    }

    render() {
        if (!this.state.isReady) {
            return null;
        } else {
            return this.props.children;
        }
    }

}