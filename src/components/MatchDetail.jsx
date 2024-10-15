import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { useParams } from 'react-router-dom'; 

function MatchDetail() { 
    const { matchId } = useParams(); 
    const [match, setMatch] = useState(null); 

    useEffect(() => { 
        const fetchMatchDetail = async () => { 
            try { 
                const response = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/matches/v1/${matchId}`, { 
                    headers: { 
                        'x-rapidapi-key': '9d61ba58e1msh9384af565faa7f0p1bea56jsnc5789c10d7f7', 
                        'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com' 
                    } 
                }); 
                setMatch(response.data); 
            } catch (error) { 
                console.error(error); 
            } 
        }; 

        fetchMatchDetail(); 
    }, [matchId]); 

    if (!match) { 
        return <div>Loading...</div>; 
    } 

    return ( 
        <div> 
            <h2>{match.matchType} - {match.series.name}</h2> 
            <p>{match.dateTime}</p> 
            <p>Teams: {match.teams[0].name} vs {match.teams[1].name}</p> 
            {/* Add more match details as needed */} 
        </div> 
    ); 
}

export default MatchDetail;
