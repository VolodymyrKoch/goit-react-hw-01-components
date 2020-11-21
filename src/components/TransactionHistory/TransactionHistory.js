import React from 'react';
import PropTypes from 'prop-types';
import classes from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={classes.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => {
          return (
            <tr key={el.id}>
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
