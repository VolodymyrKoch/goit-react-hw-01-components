import React from 'react';
import classes from '../FriendList.module.css';
import PropTypes from 'prop-types';

const FriendListItem = friends => {
  const { avatar, name, isOnline } = friends;
  let statusClass = isOnline ? classes.statusOn : classes.statusOff;
  return (
    <li className={classes.item}>
      <span className={statusClass}>{isOnline}</span>
      <img className={classes.avatar} src={avatar} alt="" width="48" />
      <p className={classes.name}>{name}</p>
    </li>
  );
};
export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
