import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import DeviceSelection from './Components/DeviceSelection';
import DeviceCard from './Components/DeviceCard';
import UserBvn from './Components/UserBvn';

const App = () => {
    return (
        <Routes>
            {/* Default route for "/" */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/DeviceSelection" element={<DeviceSelection />} />
            <Route path="/device/:deviceName" element={<DeviceCard />} />
            <Route path="/UserBvn" element={<UserBvn />} />
        </Routes>
    );
};

export default App;
