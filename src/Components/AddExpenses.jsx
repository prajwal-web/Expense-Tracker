import React, { useState } from "react";

function AddExpense({ handleAddExpense, totExp, categories1 }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [categories, setCategories] = useState("");
  const [date, setdate] = useState("");

  const onAddExpense = () => {
    if (description && amount) {
      let newExpense = {
        description,
        amount: parseFloat(amount),
        categories,
        date,
      };
      handleAddExpense(newExpense);
      setDescription("");
      setAmount("");
      setCategories("");
      setdate("");
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
            className="form-control "
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="col">
          <select
            name="categories"
            id="categories"
            className="form-control"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          >
            <option value="" className="form-control">
              Select Category
            </option>
            {categories1.map((data, index) => (
              <option value={data} key={index}>
                {data}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <input
            type="date"
            className="form-control abc cdf"
            placeholder="Amount"
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-dark" onClick={onAddExpense}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default AddExpense;
