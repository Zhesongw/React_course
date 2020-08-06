import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();

console.log(now.format());

export default class ExpenseForm extends React.Component{
    state = {
        description: '',
        note:'',
        amount:'',
        createdAt: moment(),
        calendarFocused: false
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState( () => ({description}));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState( () => ({note}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match (/^\d*(\.\d{0,2})?$/)){  //regular expression to limit the format of numbers
            this.setState(() => ({amount}));
        }
    }
    onDateChange = (createdAt) => {
        this.setState( () => ({createdAt}))
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    }
    render(){
        return(
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    ></input>
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    ></input>
                    <SingleDatePicker
                        date ={this.props.createdAt}
                        onDateChange={this.onDateChange}
                        focused = {this.props.calendarFocused}
                        onFocusChange={this.onFocusChange}
                    ></SingleDatePicker>
                    <textarea
                        placeholder="Add your note(Optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}