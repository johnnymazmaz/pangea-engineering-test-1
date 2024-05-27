import React from 'react';
import './App.css';
import Header from './Header';
import CreatorPage from './CreatorPage';
import PhylloIntegration from './PhylloIntegration';

function App() {
    // Replace with your actual initial values if you have them
    const sdkToken = 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjA4Y2ZiMjQtMDQwOS00ODJkLThjNmYtZDYyMDAzYTBlYmFjIiwidGVuYW50X2lkIjoiNjM2NWZjMzktOTY1Yi00YmQyLWI3NTAtZTMzM2U5YWJhZDk2IiwidGVuYW50X2FwcF9pZCI6IjY3NzhlZTNhLTcxY2EtNDE4Mi05MzA4LTQxZDgwYWI5N2E1MiIsInByb2R1Y3RzIjpbIklERU5USVRZIiwiUFVCTElTSF9DT05URU5UIiwiRU5HQUdFTUVOVF9BVURJRU5DRSIsIklOQ09NRSIsIklERU5USVRZX0FVRElFTkNFIiwiQUNUSVZJVFkiLCJFTkdBR0VNRU5UIl0sImlzcyI6Imh0dHBzOi8vYXBpLmdldHBoeWxsby5jb20iLCJhdWQiOiJodHRwczovL2FwaS5nZXRwaHlsbG8uY29tL3YxL2ludGVybmFsIiwiaWF0IjoxNzE2ODMxOTA0Ljc5OTMwMSwiZXhwIjoxNzE3NDM2NzA0Ljc5OTI5NH0.9Zdyrd7M4y8L4HHvLcH7frez-K9LH5py_FsNR7P6Cxo';
    const userId = '208cfb24-0409-482d-8c6f-d62003a0ebac';

    return (
        <div className="app-container">
            <Header />
            <div className="header-line"></div>
            <CreatorPage />
            <PhylloIntegration sdkToken={sdkToken} userId={userId} />
        </div>
    );
}

export default App;

/*const sdkToken = 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjA4Y2ZiMjQtMDQwOS00ODJkLThjNmYtZDYyMDAzYTBlYmFjIiwidGVuYW50X2lkIjoiNjM2NWZjMzktOTY1Yi00YmQyLWI3NTAtZTMzM2U5YWJhZDk2IiwidGVuYW50X2FwcF9pZCI6IjY3NzhlZTNhLTcxY2EtNDE4Mi05MzA4LTQxZDgwYWI5N2E1MiIsInByb2R1Y3RzIjpbIklERU5USVRZIiwiUFVCTElTSF9DT05URU5UIiwiRU5HQUdFTUVOVF9BVURJRU5DRSIsIklOQ09NRSIsIklERU5USVRZX0FVRElFTkNFIiwiQUNUSVZJVFkiLCJFTkdBR0VNRU5UIl0sImlzcyI6Imh0dHBzOi8vYXBpLmdldHBoeWxsby5jb20iLCJhdWQiOiJodHRwczovL2FwaS5nZXRwaHlsbG8uY29tL3YxL2ludGVybmFsIiwiaWF0IjoxNzE2ODMxOTA0Ljc5OTMwMSwiZXhwIjoxNzE3NDM2NzA0Ljc5OTI5NH0.9Zdyrd7M4y8L4HHvLcH7frez-K9LH5py_FsNR7P6Cxo';
const userId = '208cfb24-0409-482d-8c6f-d62003a0ebac';*/