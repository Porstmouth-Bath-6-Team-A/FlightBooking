import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import home from '../app/components/home/home';
import user from '../app/components/user/user';
import App from '../app/app';

ReactDOM.render(
        <App>
                <Router>
                        <Switch>
                                <Route exact path={["/home", "/"]} component={home}></Route>
                                <Route exact path={"/user"} component={user}></Route>
                        </Switch>
                </Router>
        </App>
       ,document.querySelector("#app")
);