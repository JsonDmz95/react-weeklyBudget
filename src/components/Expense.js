import React from "react";

const Expense = ({ expense }) => (
  <li className="expenses">
    <p>
      {expense.title}

      <span className="expense">$ {expense.amount.toFixed(2)}</span>
    </p>
  </li>
);

export default Expense;
