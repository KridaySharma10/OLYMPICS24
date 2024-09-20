import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import SearchBar from './SearchBar';
import './PlayerList.scss';

const playersData = [
  {
    name: 'Usain Bolt',
    sport: 'Athletics',
    country: 'Jamaica',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Usain_Bolt_June_2013.jpg/330px-Usain_Bolt_June_2013.jpg',
  },
  {
    name: 'Simone Biles',
    sport: 'Gymnastics',
    country: 'USA',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Simone_Biles_Stuttgart_2019.jpg/330px-Simone_Biles_Stuttgart_2019.jpg',
  },
  {
    name: 'Michael Phelps',
    sport: 'Swimming',
    country: 'USA',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Michael_Phelps_-_2009_Champion%27s_Swim_Series.jpg/330px-Michael_Phelps_-_2009_Champion%27s_Swim_Series.jpg',
  },
  // Add more players here
];

const PlayerList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlayers = playersData.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="player-list">
      <SearchBar onSearch={setSearchTerm} />
      <div className="players">
        {filteredPlayers.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
