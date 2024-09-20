import React from 'react';
import './PlayerCard.scss';

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <img src={player.image} alt={`${player.name}`} />
      <h2>{player.name}</h2>
      <p>Sport: {player.sport}</p>
      <p>Country: {player.country}</p>
    </div>
  );
};

export default PlayerCard;
