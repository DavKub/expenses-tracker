import React from 'react'

const Expense = ({expense, removeExpense}) => {
    return (
        <div>
            {`name: ${expense.name}, amount: ${expense.amount}`}
            <button onClick={() => removeExpense(expense.id)}>Remove</button>
        </div>
    )
}

export default Expense
