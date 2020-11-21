import React from 'react';

import classes from './Profile.module.css';
import StatsItem from './statsItem/statsItem.js';
import PropTypes from 'prop-types';

const Profile = ({ user }) => {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div className={classes.profile}>
      <div className={classes.description}>
        <img src={avatar} alt="user avatar" className={classes.avatar} />
        <p className={classes.name}>{name}</p>
        <p className={classes.tag}>@{tag}</p>
        <p className={classes.location}>{location}</p>
      </div>

      <ul className={classes.stats}>
        {Object.entries(stats).map(el => {
          return <StatsItem key={stats[el[0]]} el={el} />;
        })}
      </ul>
    </div>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
  }),
};

export default Profile;
