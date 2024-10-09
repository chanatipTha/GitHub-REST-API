import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserSearch from './UserSearch';
import UserInfo from './UserInfo';
import Header from './Header';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<UserSearch />} />
                <Route path="/user-info" element={<UserInfo />} />
            </Routes>
        </Router>
    );
}

export default App;
