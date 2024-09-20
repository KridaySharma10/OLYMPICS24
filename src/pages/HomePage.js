import React from 'react';
import Navbar from '../components/Navbar';
import PlayerList from '../components/PlayerList';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <PlayerList />
    </div>
  );
};

export default HomePage;
