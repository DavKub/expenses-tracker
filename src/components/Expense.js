import React from 'react';
import { TableRow, TableCell, Button } from '@material-ui/core';

const Expense = ({ expense, removeExpense }) => {
  return (
    <TableRow>
      <TableCell>{expense.name}</TableCell>
      <TableCell>{expense.amount}</TableCell>
      <TableCell>
        <Button
          onClick={() => removeExpense(expense.id)}
          variant="contained"
          color="secondary"
        >
          Remove
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Expense;
