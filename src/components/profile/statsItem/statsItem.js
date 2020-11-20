import React from 'react';
import PropTypes from 'prop-types';

const StatsItem = ({ el: [key, value] }) => {
  return (
    <li>
      <span className="label">{key} </span>
      <span className="quantity">{value} </span>
    </li>
  );
};

export default StatsItem;

// StatsItem.propTypes = {
//   el: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };

StatsItem.propTypes = {
  el: PropTypes.array,
};
