import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider }from 'react-redux';
import './styles/index.css';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'),
);