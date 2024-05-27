const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/scrape', async (req, res) => {
    try {
        console.log('Launching Puppeteer...');
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        console.log('Navigating to the target webpage...');
        await page.goto('https://www.tiktok.com/@lianakramirez?lang=en', { waitUntil: 'networkidle2' });

        console.log('Waiting for the followers count element to load...');
        await page.waitForSelector('#main-content-others_homepage > div > div.css-1g04lal-DivShareLayoutHeader-StyledDivShareLayoutHeaderV2.enm41492 > h3 > div:nth-child(2) > strong', { timeout: 60000 });

        console.log('Extracting the followers count...');
        const followersCount = await page.evaluate(() => {
            return document.querySelector('#main-content-others_homepage > div > div.css-1g04lal-DivShareLayoutHeader-StyledDivShareLayoutHeaderV2.enm41492 > h3 > div:nth-child(2) > strong').innerText;
        });

        console.log('Followers Count:', followersCount);

        await browser.close();

        res.json({ followers: followersCount });
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
