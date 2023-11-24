/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const dummySinglePlayer = [];

export default function SinglePlayer() {
  const [singlePlayer, setSinglePlayer] = useState(dummySinglePlayer);
  const { id } = useParams();

  useEffect(() => {
    async function fetchSinglePlayers() {
      try {
        const res = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-ET-WEB-PT/players/${id}`
        );
        const json = await res.json();
        const data = json.data;
        const player = data.player;
        setSinglePlayer(player);
      } catch (err) {
        console.error('fetchSinglePlayer for Details Failed!', err);
      }
    }
    return () => fetchSinglePlayers();
  },[]);

  return (<>
    <div className='SPPage'>
      <div className='individualPlayerTileDetails'>
        <p className='playerName'>{singlePlayer.name}</p>
        <div className="playerDetailsLayout">
          <div className='playerDetailsPhoto'>
            <img alt='{singlePlayer.breed}' src={singlePlayer.imageUrl} />
          </div>
          <div className='playerDetailsBody'>
            <div>
              <p className='SPDetailTitles'>Breed:</p>
              <h4 className='playerBreed'>{singlePlayer.breed}</h4>
            </div>
            <div>
              <p className='SPDetailTitles'>Player Status:</p>
              <h4 className='playerStatus'>{singlePlayer.status}</h4>
            </div>
            <div>
              <p className='SPDetailTitles'>Team ID:</p>
              <h4 className='playerTeamId'>{singlePlayer.teamId}</h4>
            </div>
          </div>
        </div>
        <div className='SPButtons'>
          <Link to={'/'} className='playerTile'>
            <button className='dogPlayerTilebutton SPB SPBColor'>
              All Players
            </button>
          </Link>
          <Link to={`/deleteVerification/${singlePlayer.id}`}>
            <button className='dogPlayerTilebutton SPB SPBColor'>
              Remove Player
            </button>
          </Link>
        </div>
      </div>  
    </div>
    </>);
}
