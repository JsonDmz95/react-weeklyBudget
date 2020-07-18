import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import Budget from "./components/Budget";

function App() {
  //define state
  const [budget, addBudget] = useState(0);
  const [remaining, updateRemaining] = useState(0);
  const [question, updateQuestion] = useState(true);
  const [expenses, updateExpenses] = useState([]);
  const [expense, addNewExpense] = useState({});
  const [createExpense, saveCreateExpense] = useState(false);

  // useEffect tha updates reaming
  useEffect(() => {
    if(createExpense){
      updateExpenses([
        ...expenses,
        expense
      ]);

      const remainingBudget = remaining - expense.amount;
      updateRemaining(remainingBudget);

      saveCreateExpense(false);
    }
  }, [expense, createExpense, updateExpenses, expenses, remaining, saveCreateExpense]);

  //Add a new expense
  // const addNewExpense = (expense) =>{
  //   updateExpenses([
  //     ...expenses,
  //     expense
  //   ]);
  // }

  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>
      </header>
      <div className="content main-content">
        {question ? (
          <Question
            addBudget={addBudget}
            updateRemaining={updateRemaining}
            updateQuestion={updateQuestion}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Form 
                addNewExpense={addNewExpense}
                saveCreateExpense={saveCreateExpense}
              />
            </div>
            <div className="one-half column">
              <List 
                expenses={expenses}
              />

              <Budget 
                budget={budget}
                remaining={remaining}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
