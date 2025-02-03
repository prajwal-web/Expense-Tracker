import React, { useState } from "react";
import "./App.css";
import AddExpense from "./Components/AddExpenses";
import Expenses from "./Components/Expenses";
import Navbar from "./Components/Navbar";

function App() {
  const [expense, setExpense] = useState([]);

  const handleAddExpense = (newExpense) => {
    setExpense([...expense, newExpense]);
  };

  const handleDeleteExpense = (expenseIndexToDelete) => {
    setExpense(expense.filter((exp, index) => index !== expenseIndexToDelete));
  };
  const totalExpense = expense.reduce(
    (total, currentExpense) => total + currentExpense.amount,
    0
  );

  return (
    <>
      <Navbar />
      <div className="container1">
        <AddExpense handleAddExpense={handleAddExpense} totExp={totalExpense} />
        <Expenses
          expenses={expense}
          handleDeleteExpense={handleDeleteExpense}
        />
      </div>
    </>
  );
}

export default App;
