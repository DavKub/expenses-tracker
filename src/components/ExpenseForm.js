import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ name, amount });
    setName('');
    setAmount(0);
  };

  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          label="Item name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ExpenseForm;
