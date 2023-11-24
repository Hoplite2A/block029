/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function DeleteVerification() {

    const dummySinglePlayer = [];

    const [singlePlayer, setSinglePlayer] = useState(dummySinglePlayer);
    const { id } = useParams();
  
    useEffect(() => {
      async function fetchSinglePlayerForDeletion() {
        try {
          const res = await fetch(
            `https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-ET-WEB-PT/players/${id}`
          );
          const json = await res.json();
          const data = json.data;
          const player = data.player;
          setSinglePlayer(player);
        } catch (err) {
          console.error('fetchSinglePlayers for Deletion Failed!', err);
        }
      }
      return () => fetchSinglePlayerForDeletion();
    },[]);
  
    return (
        <div className='verificationMessage'>
          <div className='playerDetailsPhoto'>
            <img alt={singlePlayer.breed} src={singlePlayer.imageUrl} />
          </div>
          <p className='DVMessage'>Are you sure you want to delete {singlePlayer.name}?</p>
          <div className='SPButtons'>
            <Link to={'/'}>
              <button className='dogPlayerTilebutton DVBColor'>
                No, I need to look at all the players again.
              </button >
            </Link>
            <Link to={`/delete/${singlePlayer.id}`}>
              <button className='dogPlayerTilebutton DVRBColor'>
                Remove
              </button>
            </Link>
          </div>
        </div>
    )
}