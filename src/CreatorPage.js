import React, { useState } from 'react';
import CreatorPicture from './CreatorPicture';
import CreatorInfo from './CreatorInfo'
import CreatorInfoLive from './CreatorInfoLive';
import Confetti from './Confetti';
import CreatorPieChart from './PieChart'; 

const CreatorPage = () => {
    const [showConfetti, setShowConfetti] = useState(false);

    const handleBookMeClick = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000); /
    };

    return (
        <div className="creator-page">
            {showConfetti && <Confetti show={showConfetti} />}
            <header className="creator-header">
                <h1>John Doe's Creator Page</h1>
            </header>
            <div className="creator-content">
                <CreatorPicture />
                <CreatorInfo />
                <CreatorInfoLive/>
            </div>
            <div className="creator-chart-container">
                <div className="creator-chart">
                    <CreatorPieChart /> 
                </div>
                <p className="creator-chart-text">Percentage of following in different ranges</p>
            </div>
            <button className="book-me-button" onClick={handleBookMeClick}>
                Book Me
            </button>
        </div>
    );
};

export default CreatorPage;
