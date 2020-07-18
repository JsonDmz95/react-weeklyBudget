import React, {useState} from 'react';
import Error from "./Error";
import shortid from 'shortid';

const Form = ({addNewExpense}) => {

  const [expense, saveExpense] = useState({
    title: "",
    amount: 0
  });
  const{title, amount} = expense;

  const [error, saveError] = useState(false);

  //Executed when the user add a new expense
  const addExpense = e => {
    e.preventDefault();

    // Validation
    if(amount < 1 || isNaN(amount) || title.trim() === ''){
      saveError(true);
      return;
    }
    saveError(false);

    //Asign ID
    expense.id = shortid.generate();

    //send exprense to app
    addNewExpense(expense);

    //clean form
    saveExpense({
      title: "",
      amount: 0
    });
    document.getElementById("title").focus();
  }

  return ( 
    <form onSubmit={addExpense}>
      <h2>Track your expenses</h2>

      {error ? <Error message="The expense need a name and the ammount must be more than $1 🤔"/> : null}

      <div className="form-group">
        <label>Expense title:</label>
        <input 
          id="title"
          type="text"
          className="u-full-width"
          placeholder="Ex.: Restaurant"
          value={title}
          onChange = {e => saveExpense({
              ...expense,
              title: e.target.value
          })}
        />
      </div>

      <div className="form-group">
        <label>Expense amount:</label>
        <input 
          type="number"
          step="0.01"
          className="u-full-width"
          placeholder="Ex.: 300"
          value={amount}
          onChange= {e => saveExpense({
            ...expense,
            amount: parseFloat(e.target.value, 10)
        })}
        />
      </div>

      <input 
        type="submit"
        className="button-primary u-full-width"
        value="Submit Expense"
        readOnly={true}
      />
    </form>
   );
}
 
export default Form;