
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Demo() {
    const [data, setData] = useState(null);

    const getdata = () => {
        axios.get('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', {
            headers: { 
                'x-rapidapi-key': '9d61ba58e1msh9384af565faa7f0p1bea56jsnc5789c10d7f7',
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
        getdata();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }
    const matches = data.typeMatches || [];

    return (
        <div>
             <ul>
            {matches.slice(0, 4).map((match) => ( // Ensure to show 4 matches
                <li key={match.id}>
                    <Link to={`/match/${match.id}`}> {/* Use match.id for routing */}
                        <p>{match.matchType}</p>
                    </Link>
                </li>
            ))}
        </ul>
        </div>
    );
}

export default Demo;