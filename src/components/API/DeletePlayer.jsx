/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function DeletePlayer() {
  const { id } = useParams();

  useEffect(() => {
    async function deletePlayer() {
      try {
        const res = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-ET-WEB-PT/players/${id}`,
          {
            method: "DELETE",
          }
        );
        const json = await res.json();
        console.log(`Deleted Player json: ${json}`);
      } catch (err) {
        console.error(`Deletion of Player Failed`, err);
      }
    }
    return () => deletePlayer();
  }, []);

  return (
    <Link to="/">
      <div className='DPMDiv1'>
        <div className="DPMDiv2">
          <p className="DPMessage">
            Player has been deleted. Click here to see all remaining players.
          </p>
        </div>
      </div>
    </Link>
  );
}
