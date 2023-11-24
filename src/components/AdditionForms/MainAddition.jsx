import DetailedAddition from "./DetailedAddition";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MainAddition() {
  const [newPlayerName, setNewPlayerName] = useState([]);
  const [newPlayerBreed, setNewPlayerBreed] = useState([]);

  const handleSubmit = (newPlayerName, newPlayerBreed) => {
    <DetailedAddition name={newPlayerName} breed={newPlayerBreed} />;
  };

  return (
    <>
      <form className="mainAddition" onSubmit={handleSubmit}>
        <div className="mainAdditionName">
          <label htmlFor="newPlayerName">Name:</label>
          <input
            type="text"
            name="newplayerName"
            id="newPlayerName"
            onChange={(e) => {
              return setNewPlayerBreed(e.target.value);
            }}
          />
        </div>
        <div className="mainAdditionBreed">
          <label htmlFor="newPlayerBreed">Breed:</label>
          <input
            type="text"
            name="newPlayerBreed"
            id="newPlayerBreed"
            onChange={(e) => {
              return setNewPlayerName(e.target.value);
            }}
          />
        </div>
        <Link to="/detailedAddition">
          <button type="submit">Create New Player</button>
        </Link>
      </form>
      <Link to="/">
        <button>Bring me back to all the players.</button>
      </Link>
    </>
  );
}
