import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import home from '../app/components/home/home';
import user from '../app/components/user/user';
import flights from '../app/components/flight/flights';
import detail from '../app/components/flight/detail';
import booking from '../app/components/flight/booking';
import userRegistration from '../app/components/user/userRegistration';
import App from '../app/app';

ReactDOM.render(
        <App>
                <Router>
                        <Switch>
                                <Route exact path={["/home", "/"]} component={home}></Route>
                                <Route exact path={"/user"} component={user}></Route>
                                <Route exact path={"/user/register"} component={userRegistration}></Route>
                                <Route exact path={"/flights"} component={flights}></Route>
                                <Route exact path={"/flights/detail/:id"} component={detail}></Route>
                                <Route exact path={"/booking"} component={booking}></Route>
                        </Switch>
                </Router>
        </App>
       ,document.querySelector("#app")
);