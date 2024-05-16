import React, { useState } from 'react';
import CreatorPicture from './CreatorPicture';
import CreatorInfo from './CreatorInfo';
import Confetti from './Confetti';
import CreatorPieChart from './PieChart'; 

const CreatorPage = () => {
    const [showConfetti, setShowConfetti] = useState(false);

    const handleBookMeClick = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000); 
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
            </div>
            <div className="creator-chart-container">
                <div className="creator-chart">
                    <CreatorPieChart /> {/* Add the pie chart below the creator info */}
                </div>
                <p className="creator-chart-text">Percentage of following in different ranges</p> {/* Add the text below the pie chart */}
            </div>
            <button className="book-me-button" onClick={handleBookMeClick}>
                Book Me
            </button>
        </div>
    );
};

export default CreatorPage;
