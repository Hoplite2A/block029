// import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function DetailedAddition() {

  

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
