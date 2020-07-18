import React, {Fragment} from 'react';
import {reviewBudget} from '../helpers';

const Budget = ({budget, remaining}) => {
  return ( 
      <Fragment>
        <div className="alert alert-primary">
          Budget: $ {budget}
        </div>
        <div className={reviewBudget(budget, remaining)}>
          Remaining: $ {remaining}
        </div>
      </Fragment>
   );
}
 
export default Budget;