import React, { useState, useEffect } from 'react'
import ExpenseList from './ExpenseList'
import ExpenseForm from './ExpenseForm'
import ExpensesTotal from './ExpensesTotal'

const Wrapper = () => {
    const initialExpenses = [{id: 1, name: 'kovork', amount: 120}, {id: 2, name: 'phone', amount: 500}]
    const [expenses, setExpenses] = useState(initialExpenses)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(getTotal())
    }, [expenses])
    
    const addExpense = expense => {
        setExpenses([...expenses, {...expense, id: expenses.length + 1}])
    }

    const removeExpense = id => {
        setExpenses(expenses.filter(expense => expense.id !== id))
    }

    const getTotal =() => {
        let updatedTotal = 0
        expenses.forEach(expense => updatedTotal += Number(expense.amount))
        return updatedTotal
    }

    return (        
        <div>
            <ExpensesTotal total={total} />
            <ExpenseForm addExpense={addExpense} />
            <ExpenseList expenses={expenses} removeExpense={removeExpense} />
        </div>
    )
}

export default Wrapper
