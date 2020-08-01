import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js';
import 'normalize.css/normalize.css'; //help works across browsers
import './styles/styles.scss';

const appRoot = document.getElementById('app');

ReactDOM.render(<IndecisionApp options = {['option1','option2','option3']}/>,appRoot);
