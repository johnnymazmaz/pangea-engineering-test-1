import axios from 'axios';

const getPhylloKey = async () => {
    try {
        const response = await fetch('/phyllo_key.txt');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const apiKey = await response.text();
        return apiKey.trim();
    } catch (error) {
        console.error('Error fetching API key:', error);
        throw error;
    }
};

const PHYLLO_API_BASE_URL = 'https://api.staging.getphyllo.com/v1';

export const getProfileData = async (accountId) => {
    try {
        const apiKey = await getPhylloKey();
        const response = await axios.get(`${PHYLLO_API_BASE_URL}/profiles?account_id=${accountId}`, {
            headers: {
                'Authorization': `Basic ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching profile data:', error);
        throw error;
    }
};
