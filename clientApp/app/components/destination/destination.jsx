import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../../components/common/navigation';
import Footer from '../../components/common/footer';

export default class destination extends React.Component {

    constructor(){
        super();
    }

    render(){
        return(
            <React.Fragment>
                <Navigation />
                <header id="gtco-header" className="gtco-cover gtco-cover-sm" role="banner" style={{backgroundImage: 'url(./assets/images/img_6.jpg)'}}>
                    <div className="overlay"></div>
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 text-center">
                                <div className="row row-mt-15em">
                                    <div className="col-md-12 mt-text">
                                        <h1>Destination</h1>	
                                    </div>                                    
                                </div>                                
                            </div>
                        </div>
                    </div>
                </header>            
                <div className="gtco-section">
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                                <h2>Some of our featured destinations</h2>
                                <p>Travel to one of our featured destinations and have a carefree and enjoyable time</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <Link to="/home" className="fh5co-card-item image-popup">
                                    <figure>
                                        <div className="overlay"><i className="ti-plus"></i></div>
                                        <img src="./assets/images/img_1.jpg" alt="Image" className="img-responsive" />
                                    </figure>
                                    <div className="fh5co-text">
                                        <h2>New York, USA</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                        <p><span className="btn btn-primary">Schedule a Trip</span></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <Link to="/home" className="fh5co-card-item image-popup">
                                    <figure>
                                        <div className="overlay"><i className="ti-plus"></i></div>
                                        <img src="./assets/images/img_2.jpg" alt="Image" className="img-responsive"/>
                                    </figure>
                                    <div className="fh5co-text">
                                        <h2>Seoul, South Korea</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                        <p><span className="btn btn-primary">Schedule a Trip</span></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <Link to="/home" className="fh5co-card-item image-popup">
                                    <figure>
                                        <div className="overlay"><i className="ti-plus"></i></div>
                                        <img src="./assets/images/img_3.jpg" alt="Image" className="img-responsive"/>
                                    </figure>
                                    <div className="fh5co-text">
                                        <h2>Paris, France</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                        <p><span className="btn btn-primary">Schedule a Trip</span></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 ol-md-4 col-sm-6">
                                <Link to="/home" className="fh5co-card-item image-popup">
                                    <figure>
                                        <div className="overlay"><i className="ti-plus"></i></div>
                                        <img src="./assets/images/img_4.jpg" alt="Image" className="img-responsive"/>
                                    </figure>
                                    <div className="fh5co-text">
                                        <h2>Sydney, Australia</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                        <p><span className="btn btn-primary">Schedule a Trip</span></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <Link to="/home" className="fh5co-card-item image-popup">
                                    <figure>
                                        <div className="overlay"><i className="ti-plus"></i></div>
                                        <img src="./assets/images/img_5.jpg" alt="Image" className="img-responsive"/>
                                    </figure>
                                    <div className="fh5co-text">
                                        <h2>Greece, Europe</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                        <p><span className="btn btn-primary">Schedule a Trip</span></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <Link to="/home" className="fh5co-card-item image-popup">
                                    <figure>
                                        <div className="overlay"><i className="ti-plus"></i></div>
                                        <img src="./assets/images/img_6.jpg" alt="Image" className="img-responsive"/>
                                    </figure>
                                    <div className="fh5co-text">
                                        <h2>Spain, Europe</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                        <p><span className="btn btn-primary">Schedule a Trip</span></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <Link to="/home" className="fh5co-card-item image-popup">
                                    <figure>
                                        <div className="overlay"><i className="ti-plus"></i></div>
                                        <img src="./assets/images/img_1.jpg" alt="Image" className="img-responsive"/>
                                    </figure>
                                    <div className="fh5co-text">
                                        <h2>New York, USA</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                        <p><span className="btn btn-primary">Schedule a Trip</span></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <Link to="/home" className="fh5co-card-item image-popup">
                                    <figure>
                                        <div className="overlay"><i className="ti-plus"></i></div>
                                        <img src="./assets/images/img_2.jpg" alt="Image" className="img-responsive"/>
                                    </figure>
                                    <div className="fh5co-text">
                                        <h2>Seoul, South Korea</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                        <p><span className="btn btn-primary">Schedule a Trip</span></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <Link to="/home" className="fh5co-card-item image-popup">
                                    <figure>
                                        <div className="overlay"><i className="ti-plus"></i></div>
                                        <img src="./assets/images/img_3.jpg" alt="Image" className="img-responsive"/>
                                    </figure>
                                    <div className="fh5co-text">
                                        <h2>Paris, France</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                        <p><span className="btn btn-primary">Schedule a Trip</span></p>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <Link to="/home" className="fh5co-card-item image-popup">
                                    <figure>
                                        <div className="overlay"><i className="ti-plus"></i></div>
                                        <img src="./assets/images/img_4.jpg" alt="Image" className="img-responsive"/>
                                    </figure>
                                    <div className="fh5co-text">
                                        <h2>Sydney, Australia</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                        <p><span className="btn btn-primary">Schedule a Trip</span></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <Link to="/home" className="fh5co-card-item image-popup">
                                    <figure>
                                        <div className="overlay"><i className="ti-plus"></i></div>
                                        <img src="./assets/images/img_5.jpg" alt="Image" className="img-responsive"/>
                                    </figure>
                                    <div className="fh5co-text">
                                        <h2>Greece, Europe</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                        <p><span className="btn btn-primary">Schedule a Trip</span></p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <Link to="/home" className="fh5co-card-item image-popup">
                                    <figure>
                                        <div className="overlay"><i className="ti-plus"></i></div>
                                        <img src="./assets/images/img_6.jpg" alt="Image" className="img-responsive"/>
                                    </figure>
                                    <div className="fh5co-text">
                                        <h2>Spain, Europe</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                        <p><span className="btn btn-primary">Schedule a Trip</span></p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
	            </div>
                <Footer />
            </React.Fragment>
        );
    }

}