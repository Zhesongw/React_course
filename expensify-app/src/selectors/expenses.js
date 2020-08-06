import React from 'react';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) =>{
    return expenses.filter((expense) => {
        const startDateMatach =  typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatach && endDateMatch && textMatch;
    }).sort((a, b) =>{
        if(sortBy === 'date'){
            return a.createAt - b.createAt;
        }else if(sortBy === 'amount'){
            return a.amount - b.amount;
        }
    })
}

export default getVisibleExpenses;