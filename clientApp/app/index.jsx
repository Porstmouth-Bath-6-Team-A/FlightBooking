import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import home from '../app/components/home/home';
import home1 from '../app/components/home/home1';
import user from '../app/components/user/user';

ReactDOM.render(
       <Router>
            <Switch>
                    <Route exact path={["/home", "/"]} component={home}></Route>
                    <Route exact path={"/home1"} component={home1}></Route>
                    <Route exact path={"/user"} component={user}></Route>
            </Switch>
        </Router>
       ,document.querySelector("#app")
);