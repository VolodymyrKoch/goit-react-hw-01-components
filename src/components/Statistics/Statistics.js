import React from 'react';
import classes from './Statistics.module.css';
import StatisticItem from './StatisticItem/StatisticItem.js';

import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}

      <ul className={classes.statList}>
        {stats.map(el => {
          return (
            <StatisticItem
              key={el.id}
              label={el.label}
              percentage={el.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.defaultProps = {
  title: 'Upload stats',
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
