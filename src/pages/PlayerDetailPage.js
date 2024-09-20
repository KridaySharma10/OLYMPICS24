// src/pages/PlayerDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PlayerDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Player Details for ID: {id}</h1>
    </div>
  );
};

export default PlayerDetailPage;
