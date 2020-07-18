import React from "react";
import PropTypes from "prop-types";

const Expense = ({ expense }) => (
  <li className="expenses">
    <p>
      {expense.title}

      <span className="expense">$ {expense.amount.toFixed(2)}</span>
    </p>
  </li>
);

Expense.propTypes = {
  expense: PropTypes.object.isRequired
}

export default Expense;
