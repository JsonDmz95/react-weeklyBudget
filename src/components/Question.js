import React, {Fragment} from 'react';

const Question = () => {
  return ( 
    <Fragment>
      <h2>Type your budget</h2>

      <form>
        <input 
          type="number"
          className="u-full-width"
          placeholder="Typer your budget here..."
        />

        <input 
          type="Submit"
          className="button-primaty u-full-width"
          value="Set Budget"
        />
      </form>
    </Fragment>
   );
}
 
export default Question;