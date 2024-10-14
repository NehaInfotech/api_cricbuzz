import React from 'react';
import { useParams } from 'react-router-dom';

function MatchDetail() {
    const { id } = useParams();

    // Fetch match details using the id, similar to how you fetched recent matches
    // For simplicity, this is just a placeholder.
    
    return (
        <div>
            <h1>Match Detail for ID: {id}</h1>1234567890
        </div>
    );
}

export default MatchDetail;
