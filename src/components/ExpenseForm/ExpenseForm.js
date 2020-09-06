import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ name, amount });
    setName("");
    setAmount(0);
  };

  return (
    <form>
      <TextField
        id="outlined-basic"
        className="form-input"
        label="Item name"
        variant="outlined"
        value={name || ""}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <TextField
        id="outlined-basic"
        className="form-input"
        label="Amount"
        type="number"
        variant="outlined"
        value={amount || ""}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />

      <Button
        variant="contained"
        className="form-input"
        color="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </form>
  );
};

export default ExpenseForm;
