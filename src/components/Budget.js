import React, {Fragment} from 'react';
import {reviewBudget} from '../helpers';
import PropTypes from "prop-types";

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

Budget.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired
}
 
export default Budget;