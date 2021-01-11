import React from 'react';
import flightStore from '../../stores/flightStore';
import flightServices from '../../services/flightServices';
import {flightEvents} from '../../enums/events';
import Flight from '../flight/flight';
import Navigation from '../../components/common/navigation';
import Footer from '../../components/common/footer';

export default class flights extends React.Component {

    constructor(){
        super();

        this.pageSize = 10;
        this.flightCount = 0;
        this.flightSorting = flightServices.getFlightSorting();

        this.state = {
            currentPage: 1,
            flightSorting: this.flightSorting[0],
            isLoading: true
        };
    }

    componentDidMount() {
        flightStore.on(flightEvents.GET_FLIGHTS_DONE, this.updateComponent);
    }

    componentWillUnmount() {
        flightStore.off(flightEvents.GET_FLIGHTS_DONE, this.updateComponent);
    }

    updateComponent = () => {
        this.flightCount = flightServices.getFlightCount();
        
        this.setState({
            isLoading: false
        });
    }

    goFirst = () => {
        this.setState({
            currentPage: 1
        });
    }

    goEnd = () => {
        this.setState({
            currentPage: Math.ceil(this.flightCount / this.pageSize)
        });
    }

    goPrevious = () => {
        this.setState({
            currentPage: this.state.currentPage == 1 ? 1 : this.state.currentPage - 1
        });
    }

    goNext = () => {
        let pageCanGo = Math.ceil(this.flightCount / this.pageSize);
        this.setState({
            currentPage: pageCanGo == this.state.currentPage ? pageCanGo : this.state.currentPage + 1
        });
    }

    onChangeFlightSorting = (e) => {
        this.setState({
            flightSorting: e.target.value
        });
    }

    render(){
        let flights = flightServices.getFlights(this.state.currentPage, this.pageSize, this.state.flightSorting);

        return(
            <React.Fragment>
                <Navigation />
                <header id="gtco-header" className="gtco-cover gtco-cover-sm" role="banner" style={{backgroundImage: 'url(./assets/images/img_bg_3.jpg)'}}>
                    <div className="overlay"></div>
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 text-left">
                                <div className="row row-mt-15em">
                                    <div className="col-md-7 mt-text">
                                        <h1>Flight List</h1>
                                        <span className="intro-text-small">Flights from #departure to #destination</span>	
                                    </div>                                    
                                </div>                                
                            </div>
                        </div>
                    </div>
                </header>
                <div className="section">
                    <div className="tpd-plan">
                        <select className="form-control" onChange={this.onChangeFlightSorting}>
                            {Object.keys(this.flightSorting).map(key => {
                                return <option key={key} value={this.flightSorting[key]}>{this.flightSorting[key]}</option>
                            })}
                        </select>
                        <br /><br />
                        {flights.map(flight => 
                            <Flight key={flight.id} flight={flight}></Flight>
                        )}
                        <br />
                        <input type="button" onClick={this.goFirst} value="<<" />
                        <input type="button" onClick={this.goPrevious} value="<" />
                        <input type="button" onClick={this.goNext} value=">" />
                        <input type="button" onClick={this.goEnd} value=">>" />
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="0" height="0" display="none">
                        <symbol  id="airplane" viewBox="243.5 245.183 25 21.633">
                            <g>
                                <path d="M251.966,266.816h1.242l6.11-8.784l5.711,0.2c2.995-0.102,3.472-2.027,3.472-2.308
                                            c0-0.281-0.63-2.184-3.472-2.157l-5.711,0.2l-6.11-8.785h-1.242l1.67,8.983l-6.535,0.229l-2.281-3.28h-0.561v3.566
                                            c-0.437,0.257-0.738,0.724-0.757,1.266c-0.02,0.583,0.288,1.101,0.757,1.376v3.563h0.561l2.281-3.279l6.535,0.229L251.966,266.816z
                                            "/>
                            </g>
                        </symbol>
                    </svg>
                </div>
                <Footer />
            </React.Fragment>
        );
    }

}