/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function PlayerTiles({ allPlayers }) {

  return (
    <div className='dogPlayerTiles'>
      <img className='playerTileImage' alt='{allPlayers.breed}' src={allPlayers.imageUrl} />
      <h3 className='playerName'>{allPlayers.name}</h3>
      <p className='playerTileDetails'>Player Status: {allPlayers.status}</p>
      <p className='playerTileDetails'>Team ID: {allPlayers.teamId}</p>
      <div className='playerTilesButtons'>
        <Link to={`/details/${allPlayers.id}`}>
          <button className='dogPlayerTilebutton'>Details</button>
        </Link> 
        <Link to={`/deleteVerification/${allPlayers.id}`}>
          <button className='dogPlayerTilebutton'>Remove</button>
        </Link>
      </div>
    </div>
  );
}
