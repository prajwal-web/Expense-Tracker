import React, { useState } from "react";
import "./App.css";
import AddExpense from "./Components/AddExpenses";
import Expenses from "./Components/Expenses";
import Navbar from "./Components/Navbar";
import Checkbox from "./Components/Checkbox";

function App() {
  const category = ["Food", "Transport", "Utilities", "Entertainment", "Other"];
  const [expense, setExpense] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

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

  function handleCheck(e) {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== value));
    }
  }

  const filteredExpenses = expense.filter(
    (exp) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(exp.categories)
  );

  return (
    <>
      <Navbar />
      <div className="container1">
        <AddExpense
          handleAddExpense={handleAddExpense}
          totExp={totalExpense}
          categories1={category}
        />
        <Expenses
          expenses={filteredExpenses}
          handleDeleteExpense={handleDeleteExpense}
        />
      </div>
      <Checkbox categories2={category} handleCheck={handleCheck} />
    </>
  );
}

export default App;
