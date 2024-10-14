import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cricbuzz() {
    const [data, setData] = useState(null);

    const getData = () => {
        axios.get('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', {
            headers: { 
                'x-rapidapi-key': 'YOUR_API_KEY',
                'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
            }
        })
        .then((res) => {
            console.log(res.data); 
            setData(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const matches = data.matches || []; 

    return (
        <div>
            <ul>
                {matches.slice(0, 5).map((match, i) => (
                    <li key={i}>
                        <Link to={`/match/${match.id}`}> 
                            <p>{match.matchType}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cricbuzz;
