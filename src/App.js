import React, { useState } from "react";
import Question from "./components/Question";
import Form from "./components/Form";

function App() {
  //define state
  const [budget, addBudget] = useState(0);
  const [remaining, updateRemaining] = useState(0);
  const [question, updateQuestion] = useState(true);
  const [expenses, updateExpenses] = useState([]);

  //Add a new expense
  const addNewExpense = (expense) =>{
    updateExpenses([
      ...expenses,
      expense
    ]);
  }

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
              />
            </div>
            <div className="one-half column"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
