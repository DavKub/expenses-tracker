import React, { Fragment } from "react";
import Expense from "../Expense/Expense";
import { TableBody, TableHead, TableRow, TableCell } from "@material-ui/core";

const ExpenseList = ({ expenses, removeExpense }) => {
  return (
    <Fragment>
      <TableHead>
        <TableRow>
          <TableCell variant="head">Name</TableCell>
          <TableCell variant="head">Amount</TableCell>
          <TableCell variant="head">Remove</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {expenses.map((expense, index) => (
          <Expense
            expense={expense}
            removeExpense={removeExpense}
            key={index}
          />
        ))}
      </TableBody>
    </Fragment>
  );
};

export default ExpenseList;
