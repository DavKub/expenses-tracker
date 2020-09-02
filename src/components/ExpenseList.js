import React from 'react'
import Expense from './Expense'

const ExpenseList = ({expenses, removeExpense}) => {
    return (
        <div>
            {expenses.map(expense => <Expense expense={expense} removeExpense={removeExpense} />)}
        </div>
    )
}

export default ExpenseList
