import React, {useState} from "react";
import Question from "./components/Question";


function App() {

  //define state
  const [budget, addBudget] = useState(0);
  const [remaining, updateRemaining] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>
      </header>
      <div className="content main-content">
        <Question 
          addBudget = {addBudget}
          updateRemaining = {updateRemaining}
        />

        <div className="row">
          <div className="one-half column"></div>
          <div className="one-half column"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
