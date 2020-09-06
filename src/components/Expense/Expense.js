import React from "react";
import { TableRow, TableCell, Button } from "@material-ui/core";

const Expense = ({ expense, removeExpense }) => {
  return (
    <TableRow>
      <TableCell variant="body" size="small">
        {expense.name}
      </TableCell>
      <TableCell variant="body" size="small">
        {expense.amount}
      </TableCell>
      <TableCell variant="body" size="small">
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
