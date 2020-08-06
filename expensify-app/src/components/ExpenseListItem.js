import React from 'react';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses';

const ExpenseListItem = (props) => (
    <div>
        <h1>Description: {props.description} </h1>
        <p>Amount: {props.amount}</p>
        <p>Create Time: {props.createAt}</p>
        <button onClick= {() => {props.dispatch(removeExpense(props))}}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem);