import ReactDOM from 'react-dom';
import React from "react";
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Main} from "./components/main";
import {Weather} from "./components/weather";
import {About} from "./components/about";
import {Examples} from "./components/examples";

//load foundation

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);