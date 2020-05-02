import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';

ReactDOM.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>, 
    document.getElementById('root'),
);