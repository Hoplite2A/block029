// import DetailedAddition from "./DetailedAddition";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MainAddition() {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerBreed, setNewPlayerBreed] = useState("");
  const navigate = useNavigate();

  //   const handleNameChange = (e) => {
  //       console.log(e.target.value);
  //     setNewPlayerName(e.target.value);
  //   };
  //   const handleBreedChange = (e) => {
  //       console.log(e.target.value);
  //       setNewPlayerBreed(e.target.value);
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-ET-WEB-PT/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: newPlayerName,
            breed: newPlayerBreed,
          }),
        }
      );
      const json = await res.json();
      console.log(json);
    } catch (err) {
      console.error("Posting New Detailed Player Failed", err);
    }
    navigate(`/detailedAddition/${newPlayerBreed}/${newPlayerName}`);
  };

  return (
    <>
      <div className="MAPDiv">
        <form className="mainAddition" onSubmit={handleSubmit}>
          <div className="mainAdditionInputs">
            <label htmlFor="newPlayerName">
              <input
                placeholder="Payer's Name"
                type="text"
                name="newplayerName"
                id="newPlayerName"
                //TODO ------- value={setNewPlayerName}
                onChange={(e) => {
                  setNewPlayerName(e.target.value);
                }}
              />
            </label>
            <label htmlFor="newPlayerBreed">
              <input
                placeholder="Player's Breed"
                type="text"
                name="newPlayerBreed"
                id="newPlayerBreed"
                //TODO ------- value={setNewPlayerBreed}
                onChange={(e) => {
                  setNewPlayerBreed(e.target.value);
                }}
              />
            </label>
          </div>
          <button className="MAButton" type="submit">
            Create New Player
          </button>
        </form>
        <div className="MAAPBDiv">
          <button className="MAAPButton" onClick={() => navigate("/")}>
            Bring me back to all the players.
          </button>
        </div>
      </div>
    </>
  );
}
