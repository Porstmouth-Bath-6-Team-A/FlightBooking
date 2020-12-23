import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import home from '../app/components/home/home';

ReactDOM.render(
       <Router>
            <Switch>
                    <Route path={"/home"} component={home}></Route>
            </Switch>
        </Router>
       ,document.querySelector("#app")
);