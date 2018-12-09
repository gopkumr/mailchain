import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery'

import 'bootstrap/dist/js/bootstrap.bundle'
import Home from './Home';
import Register from './register/Register'
import Navigation from './Navigation';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
<div>
   <Navigation />
    <BrowserRouter>
    <div> 
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
    </div>
    </BrowserRouter>
</div>
  ,  
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
