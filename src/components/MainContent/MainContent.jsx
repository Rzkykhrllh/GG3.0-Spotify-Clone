import React from 'react';
import Home from './Home';
import Search from './Search';

function MainContent({ isHome = true }) {
  return isHome ? <Home /> : <Search />;
}

export default MainContent;
