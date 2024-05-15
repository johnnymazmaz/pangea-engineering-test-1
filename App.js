import React from 'react';
import './App.css';
import Header from './Header';
import CreatorPage from './CreatorPage';

function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="header-line"></div>
            <CreatorPage />
        </div>
    );
}

export default App;
