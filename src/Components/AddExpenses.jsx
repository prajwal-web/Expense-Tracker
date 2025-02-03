import React, { useState } from "react";

function AddExpense({ handleAddExpense, totExp }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onAddExpense = () => {
    if (description && amount && date) {
      let newExpense = {
        description,
        amount: parseFloat(amount),
        date,
      };
      handleAddExpense(newExpense);
      setDescription("");
      setAmount("");
      setDate("");
    }
  };

  return (
    <>
      <h5 className="header">{`Total Expense is : ${totExp}`}</h5>
      <h5 className="header">Add Expense</h5>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control abc cdf"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="date"
            className="form-control"
            name="Date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={onAddExpense}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default AddExpense;
