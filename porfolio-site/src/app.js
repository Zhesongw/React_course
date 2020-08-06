import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js'
import 'normalize.css/normalize.css'; //help works across browsers
import './styles/styles.scss';

const appRoot = document.getElementById('app');

ReactDOM.render(<AppRouter />,appRoot);
