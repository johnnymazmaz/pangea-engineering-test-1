import React from 'react';

const CreatorInfo = () => {
    return (
        <div className="creator-info" style={{ fontSize: '40px' }}>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Birthdate:</strong> January 1, 1990</p>
            <p><strong>Ethnicity:</strong> White</p>
            <p><strong>Location:</strong> City, State</p>
            <p><strong>Country:</strong> United States</p>
            <p><strong>TikTok:</strong> <a href="https://www.tiktok.com/@johndoe">@johndoe</a></p>
            <p><strong>YouTube:</strong> <a href="https://www.youtube.com/channel/JohnDoeChannel">JohnDoeChannel</a></p>
            <p><strong>Instagram:</strong> <a href="https://www.instagram.com/johndoeofficial">@johndoeofficial</a></p>
        </div>
    );
};

export default CreatorInfo;
