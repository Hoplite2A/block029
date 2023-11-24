import { useState, useEffect } from "react";
import PlayerTiles from "./PlayerTiles";
import { Link } from "react-router-dom";
const dummyPlayers = [];

export default function AllPlayers() {
  //*useState for json:
  const [allPlayers, setAllPlayers] = useState(dummyPlayers);

  useEffect(() => {
    async function fetchAllPlayers() {
      try {
        const res = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-ET-WEB-PT/players"
        );
        const json = await res.json();
        const data = await json.data;
        const players = await data.players;
        setAllPlayers(players);
      } catch (err) {
        console.error("fetchAllPlayers for PlayerTiles Failed!", err);
      }
    }
    return () => fetchAllPlayers();
  }, []);

  return (
    <>
      <div className='addNewPlayerButton'>
        <Link to="/mainAddition">
          <button className='newPlayerButton'>Add A New Player Here</button>
        </Link>
      </div>
      <div className='allPlayerTilesDiv'>
        {allPlayers.map((allPlayers) => {
          return <PlayerTiles key={allPlayers.id} allPlayers={allPlayers} />;
        })}
      </div>
    </>
  );
}
