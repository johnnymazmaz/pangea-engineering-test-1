import React from 'react';
import creatorImage from './LR.jpeg';

const CreatorPicture = () => {
    return (
        <div className="creator-picture">
            <img src={creatorImage} alt="Creator Picture" />
        </div>
    );
};

export default CreatorPicture;
