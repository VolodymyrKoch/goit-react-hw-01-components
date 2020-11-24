import React from 'react';
import classes from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem.js';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={classes.friendList}>
      {friends.map(el => {
        return (
          <FriendListItem
            key={el.id}
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        );
      })}
    </ul>
  );
};
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
