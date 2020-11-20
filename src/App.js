import React from 'react';
import Profile from './components/profile//Profile.js';
import userData from './data/user.json';
import Statistics from './components/Statistics/Statistics.js';
import statsData from './data/statistical-data.json';

const App = () => {
  return (
    <>
      <Profile user={userData} />
      <Statistics stats={statsData} />
    </>
  );
};
export default App;
