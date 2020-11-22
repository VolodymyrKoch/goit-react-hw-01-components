import React from 'react';
import Profile from './components/Profile/Profile.js';
import userData from './data/user.json';
import Statistics from './components/Statistics/Statistics.js';
import statsData from './data/statistical-data.json';
import FriendList from './components/FriendList/FriendList.js';
import friendsData from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.js';
import transactionHistoryData from './data/transactionHistory.json';

const App = () => {
  return (
    <>
      <Profile user={userData} />
      <Statistics stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionHistoryData} />
    </>
  );
};
export default App;
