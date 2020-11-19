import React from 'react';
import Profile from './components/profile//Profile.js';
import user from './data/user.json';

const App = () => {
  return(
  <>
  <Profile user = {user}/>
  </>);
};
export default App;