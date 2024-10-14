
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Demo() {
    const [data, setData] = useState(null);

    const getdata = () => {
        axios.get('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', {
            headers: { 
                'x-rapidapi-key': '3cb3672bdemshf98aeb617e26551p139da4jsn8fc3db04384d',
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
            {matches.slice(0, 5).map((match, i) => (
                    <li key={i}>
                        <Link to={`/match/${match.id}`}> {/* Assuming match has an id property */}
                            <p>{match.matchType}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Demo;