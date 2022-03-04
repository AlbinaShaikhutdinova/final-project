import React from 'react';
import './cardStyle.scss';

export function PokemonCard({ name, id, imagePath, onClick }) {
  return (
    <div className='card'>
      <div className='card__container'>
        <img className='image' src={imagePath} alt={name} />
        <h4>{id}</h4>
        <h4>{name}</h4>
        <button onClick={onClick}>Catch</button>
      </div>
    </div>
  );
}