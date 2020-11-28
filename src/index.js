// JS - ./js/index.js

// SCSS/CSS
import './assets/scss/main.scss';


// REACT
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux";
import App from "./App";
import {store} from "./App";


ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
), document.getElementById("root"));