import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Demo from './components/Demo';
import International from './components/International';
import League from './components/League';
import MatchDetail from './components/MatchDetail'; // Assuming you have this component
import Women from './components/Women';
import Domestic from './components/Domestic';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Demo />} />
                <Route path="/international" element={<International />} />
                <Route path="/league" element={<League />} />
                <Route path="/Women" element={<Women />} />
                <Route path="/Domestic" element={<Domestic />} />
                <Route path="/match/:matchId" element={<MatchDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
