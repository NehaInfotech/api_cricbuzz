import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cricbuzz from './components/Cricbuzz'; 
import MatchDetail from './MatchDetail'; // Create this component
import Demo from './components/Demo';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Demo />} />
                <Route path="/match/:id" element={<MatchDetail />} />
                <Route path="/match/:id" element={<MatchDetail />} />
                <Route path="/match/:id" element={<MatchDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
