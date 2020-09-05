import React, { useState, useEffect, Fragment } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';
import ExpensesTotal from './ExpensesTotal';
import {
  TableHead,
  TableCell,
  TableRow,
  Paper,
  TableContainer,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    width: 'auto',
  },
});

const Wrapper = () => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(getTotal());
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const getTotal = () => {
    let updatedTotal = 0;
    expenses.forEach((expense) => (updatedTotal += Number(expense.amount)));
    return updatedTotal;
  };

  const styles = useStyles();

  return (
    <Fragment>
      <ExpensesTotal total={total} />
      <ExpenseForm addExpense={addExpense} />
      <TableContainer component={Paper} className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <ExpenseList expenses={expenses} removeExpense={removeExpense} />
      </TableContainer>
    </Fragment>
  );
};

export default Wrapper;
