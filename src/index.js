import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/AppContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider }from 'react-redux';
import configStore from './config/configStore';
import './styles/index.css';
require('dotenv').config();

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'),
);