import React from 'react'
import Expense from './Expense'
import { TableBody } from '@material-ui/core'

const ExpenseList = ({expenses, removeExpense}) => {
    return (
        <TableBody>
            {expenses.map(expense => <Expense expense={expense} removeExpense={removeExpense} />)}
        </TableBody>
    )
}

export default ExpenseList
