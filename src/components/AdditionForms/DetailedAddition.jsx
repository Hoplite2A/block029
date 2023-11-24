import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DetailedAddition(name, breed) {
    
    console.log(name);
    console.log(breed);

    const [newPlayer, setNewPlayer] = useState([]);

    useEffect(() => {
        async function postNewPlayer() {
            try {
          
          const res = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-ET-WEB-PT/players',
                {
                    method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                },
                    body: JSON.stringify({
                        name: `${name}`,
                        breed: `${breed}`,
                    }),
                })
                const json = res.json();
                setNewPlayer(json);
            }
            catch (err) {
                console.error('Posting New Detailed Player Feailed', err);
            }
        }
        return () => postNewPlayer();
    }, [])
    
    console.log(newPlayer);
    return (
        <div>
            <h2>Your new player has been successfully created.</h2>
            {/* <Link to='/PlayerTiles/{id}>
                <h4>Click here to view their details.</h4>
            </Link> */}
            <Link to='/'>
                <h4>Click here to go back to the main page.</h4>
            </Link>
        </div>
    )
}