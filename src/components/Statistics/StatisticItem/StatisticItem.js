import React from 'react';
import classes from '../Statistics.module.css';
import PropTypes from 'prop-types';

const StatistiItem = ({ label, percentage }) => {
  return (
    <li className={classes.item}>
      <span className={classes.label}>{label}</span>
      <span className={classes.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatistiItem;

StatistiItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number.isRequired,
};
