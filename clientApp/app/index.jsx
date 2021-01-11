import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import home from '../app/components/home/home';
import flights from '../app/components/flight/flights';
import detail from '../app/components/flight/detail';
import booking from '../app/components/flight/booking';
import userRegistration from '../app/components/user/userRegistration';
import userUpdate from '../app/components/user/userUpdate';
import about from '../app/components/about/about';
import destination from '../app/components/destination/destination';
import App from '../app/app';
import userLogin from './components/user/userLogin';

ReactDOM.render(
        <App>
                <Router>
                        <Switch>
                                <Route exact path={["/home", "/"]} component={home}></Route>
                                <Route exact path={"/user/login"} component={userLogin}></Route>
                                <Route exact path={"/user/register"} component={userRegistration}></Route>
                                <Route exact path={"/flights"} component={flights}></Route>
                                <Route exact path={"/flights/detail/:id"} component={detail}></Route>
                                <Route exact path={"/booking"} component={booking}></Route>
                                <Route exact path={"/user/update"} component={userUpdate}></Route>
                                <Route exact path={"/about"} component={about}></Route>
                                <Route exact path={"/destination"} component={destination}></Route>
                        </Switch>
                </Router>
        </App>
       ,document.querySelector("#page")
);