import React, {Fragment, useState} from 'react';
import Error from "./Error";

const Question = ({addBudget, updateRemaining, updateQuestion}) => {

  //define Question State 
  const [budget, updateBudget] = useState(0);
  const [error, saveError] = useState(false);

  //define saveBudget
  const handleChange = e => {
    updateBudget(parseFloat(e.target.value, 10));
  }

  //Submitt to set budget
  const handleSubmit = e => {
    e.preventDefault();

    //validation
    if(budget < 1 || isNaN(budget)){
      saveError(true);
      return;
    }

    //validation PASSED
    saveError(false);
    addBudget(budget);
    updateRemaining(budget);
    updateQuestion(false);
  }

  return ( 
    <Fragment>
      <h2>Type your budget</h2>

      {error ? <Error message="The budget must be more than $1 :("/> : null}

      <form
        onSubmit={handleSubmit}
      >
        <input 
          type="number"
          step="0.01"
          className="u-full-width"
          placeholder="Typer your budget here..."
          onChange={handleChange}
        />

        <input 
          type="Submit"
          className="button-primary u-full-width"
          value="Set Budget"
          readOnly={true}
        />
      </form>
    </Fragment>
   );
}
 
export default Question;