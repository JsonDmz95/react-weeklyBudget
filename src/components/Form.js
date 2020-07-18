import React, {useState} from 'react';

const Form = () => {
  return ( 
    <form>
      <h2>Track your expenses</h2>

      <div className="form-group">
        <label>Expense title</label>
        <input 
          type="text"
          className="u-full-width"
        />
      </div>
    </form>
   );
}
 
export default Form;