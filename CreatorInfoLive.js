import React, { useEffect, useState } from 'react';
import { getProfileData } from './phyllo';

function CreatorInfoLive() {
    const [followers, setFollowers] = useState('');
    const [engagement, setEngagement] = useState('');
    const [totalPosts, setTotalPosts] = useState('');
    const [averageLikes, setAverageLikes] = useState('');
    const [avgReelViews, setAvgReelViews] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProfileData('3980a2b4-da67-47c8-ad30-1d2680b2cb9d'); // Replace with actual account ID
                setFollowers(data.followers);
                setEngagement(data.engagement);
                setTotalPosts(data.totalPosts);
                setAverageLikes(data.averageLikes);
                setAvgReelViews(data.avgReelViews);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="creator-info-live" style={{ fontSize: '40px' }}>
            <p><strong>Followers:</strong> {followers}</p>
            <p><strong>Engagement:</strong> {engagement}</p>
            <p><strong>Total Posts:</strong> {totalPosts}</p>
            <p><strong>Average Likes:</strong> {averageLikes}</p>
            <p><strong>Avg Reel Views:</strong> {avgReelViews}</p>
        </div>
    );
}

export default CreatorInfoLive;
