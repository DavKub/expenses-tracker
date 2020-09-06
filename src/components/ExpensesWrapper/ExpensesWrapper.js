import React, { useState, useEffect, Fragment } from "react";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import ExpensesTotal from "../ExpensesTotal/ExpensesTotal";
import "./ExpensesWrapper.scss";
import { Paper, TableContainer, Table } from "@material-ui/core";

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

  return (
    <Fragment>
      <h2>Expenses tracker</h2>
      <div className="expenses-wrapper">
        <div className="expenses-form">
          <ExpenseForm addExpense={addExpense} />
        </div>
        <div className="expenses-table">
          <TableContainer component={Paper}>
            <Table>
              <ExpenseList expenses={expenses} removeExpense={removeExpense} />
            </Table>
          </TableContainer>
          <div className="expenses-total">
            <ExpensesTotal total={total} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Wrapper;
