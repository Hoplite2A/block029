import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function DetailedAddition() {

  console.log('Rendering Detailed Addition');
  const { breed, name } = useParams();

  useEffect(() => { 
    console.log('running use effect');
    async function postNewPlayer() {
      try {
        const res = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-ET-WEB-PT/players",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              breed,
            }),
          }
        );
        const json = await res.json();
        console.log(json);
      } catch (err) {
        console.error("Posting New Detailed Player Failed", err);
      }
    }
    // return () => postNewPlayer();
    postNewPlayer();
  }, []);

  return (
    <div className="DADiv">
      <p className="DASuccess">
        Your new player has been successfully created!
      </p>
      {/* <Link to='/PlayerTiles/{id}>
                <h4>Click here to view their details.</h4>
            </Link> */}
      <Link to="/">
        <p className="DARedirect">Click here to go back to the main page.</p>
      </Link>
    </div>
  );
}
