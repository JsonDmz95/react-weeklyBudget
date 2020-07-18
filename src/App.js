import React from "react";
import Question from "./components/Question";


function App() {
  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>
      </header>
      <div className="content main-content">
        <Question />
      </div>
    </div>
  );
}

export default App;
