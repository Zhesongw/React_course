import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js'
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'; //help works across browsers
import './styles/styles.scss';

const store = configureStore();

const waterBill = store.dispatch(addExpense({description:'Water Bill', note:"Water Bill", amount: 5000, createAt:1000}));
const gasBill = store.dispatch(addExpense({description:'Gas Bill', note:"Gas Bill", amount: 4000, createAt:1100}));
setTimeout(() =>{
    store.dispatch(setTextFilter('water'));
}, 3000)


// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses);

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

const appRoot = document.getElementById('app');

ReactDOM.render(jsx,appRoot);
