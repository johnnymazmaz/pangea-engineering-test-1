/* global PhylloConnect */
import React, { useState, useEffect } from 'react';
import { getProfileData } from './phyllo';

const PhylloIntegration = ({ sdkToken, userId }) => {
    const [accountData, setAccountData] = useState(null);

    useEffect(() => {
        if (sdkToken && userId) {
            try {
                const config = {
                    clientDisplayName: 'TCC',
                    environment: 'staging',
                    userId: userId,
                    token: sdkToken,
                };

                const phylloConnect = PhylloConnect.initialize(config);

                phylloConnect.on('accountConnected', async (accountId, workplatformId, userId) => {
                    console.log(`onAccountConnected: ${accountId}, ${workplatformId}, ${userId}`);
                    try {
                        const data = await getProfileData(accountId);
                        setAccountData(data.data[0]);  // Assuming data is an array with at least one item
                    } catch (error) {
                        console.error('Error fetching profile data:', error);
                    }
                });

                phylloConnect.on('accountDisconnected', (accountId, workplatformId, userId) => {
                    console.log(`onAccountDisconnected: ${accountId}, ${workplatformId}, ${userId}`);
                });

                phylloConnect.on('tokenExpired', (userId) => {
                    console.log(`onTokenExpired: ${userId}`);
                });

                phylloConnect.on('exit', (reason, userId) => {
                    console.log(`onExit: ${reason}, ${userId}`);
                });

                phylloConnect.on('connectionFailure', (reason, workplatformId, userId) => {
                    console.log(`onConnectionFailure: ${reason}, ${workplatformId}, ${userId}`);
                });

                document.getElementById('connectButton').onclick = phylloConnect.open;
            } catch (error) {
                console.error('Error initializing PhylloConnect:', error);
            }
        }
    }, [sdkToken, userId]);

    return (
        <div>
            <button id="connectButton">Connect Account</button>
            {accountData && (
                <div>
                    <h2>Account Data</h2>
                    <p><strong>Username:</strong> {accountData.username}</p>
                    <p><strong>Followers:</strong> {accountData.reputation.follower_count}</p>
                    <p><strong>Likes:</strong> {accountData.reputation.like_count}</p>
                    {/* Add more fields as needed */}
                </div>
            )}
        </div>
    );
};

export default PhylloIntegration;
