import React from "react";

function Expenses({ expenses, handleDeleteExpense }) {
  return (
    <div className="mt-4">
      <h5 className="expense">Expenses List</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => {
            return (
              <tr key={index}>
                <td>{expense.description}</td>
                <td>{`Rs.${expense.amount}`}</td>
                <td>{expense.categories}</td>
                <td>{expense.date}</td>
                <td>
                  <button className="btn btn-secondary mx-2">Edit</button>
                  <button
                    className="btn btn-danger my-1"
                    onClick={() => handleDeleteExpense(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Expenses;
