import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DeviceSelection.css';

const DeviceSelection = () => {
    const navigate = useNavigate();
    const [currentStep, ] = useState(1);

    const devices = [
        { name: "Samsung A15 (4GB + 128GB/4G)", price: "N240,500", image: "/images/A15.png" },
        { name: "Samsung A06 (4GB + 64GB)", price: "N146,500", image: "/images/A06.png" },
        { name: "Samsung A05 (4GB + 64GB)", price: "N127,000", image: "/images/A05 1.png" },
        { name: "Samsung A06 (4GB + 128GB)", price: "N156,500", image: "/images/A06.png" },
        { name: "Samsung A05 (4GB + 128GB)", price: "N211,000", image: "/images/A05 1.png" },
    ];

    return (
        <div className="apply-page">
            {/* Navbar */}
            <nav className="navbar">
                <a href="/LandingPage" onClick={(e) => {
                    e.preventDefault();
                    navigate('/LandingPage');
                }}>
                    <img src="/images/Corperflex Logo.svg" alt="Logo" className="logo" />
                </a>
            </nav>

            <div className="content">
                {/* Progress Steps */}
                <div className="progress-container">
                    <div className="progress-card">
                        <div className="step-links">
                            {[1, 2, 3, 4, 5, 6].map((step) => (
                                <li
                                    key={step}
                                    className={`step-item ${currentStep >= step ? 'completed' : ''} ${currentStep === step ? 'in-progress' : ''}`}
                                >
                                    <img
                                        src={`/images/Component 9 (${7 - step}).svg`}
                                        alt={`Step ${step} Icon`}
                                        className="icon"
                                    />
                                    <div className="wrap">
                                        <a href="#" onClick={(e) => e.preventDefault()}>
                                            {step === 1
                                                ? "Select device"
                                                : step === 2
                                                    ? "Tell us about yourself"
                                                    : step === 3
                                                        ? "Verification"
                                                        : step === 4
                                                            ? "Loan Summary"
                                                            : step === 5
                                                                ? "OTP Verification"
                                                                : "Select Pickup Option"}
                                        </a>
                                        <p className="status-text">
                                            {currentStep === step
                                                ? "In Progress"
                                                : currentStep > step
                                                    ? "Completed"
                                                    : ""}
                                        </p>
                                    </div>
                                    {step < 6 && <div className="vertical-line"></div>}
                                </li>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Device Cards */}
                <div className="cards-container">
                    {devices.map((device, index) => (
                        <div className="device-card" key={index}>
                            <div className="image-card">
                                <img src={device.image} alt={device.name} />
                            </div>
                            <div className="device-details">
                                <h2>
                                    <a
                                        href={`/device/${encodeURIComponent(device.name)}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigate(`/device/${encodeURIComponent(device.name)}`);
                                        }}
                                        style={{ textDecoration: 'none', color: '#333' }}
                                    >
                                        {device.name}
                                    </a>
                                </h2>
                                <p>{device.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="footer bg-dark text-white py-3 text-center">
                <div className="container">
                    <a href="/LandingPage">
                        <img
                            src={process.env.PUBLIC_URL + "/images/Corperflex Logo.svg"}
                            alt="Footer Logo"
                            className="logo-footer"
                        />
                    </a>
                    <div className="mt-3">
                        <a href="/LandingPage" className="text-white me-3">How it Works</a>
                        <a href="#contact" className="text-white">Contact Us</a>
                    </div>
                </div>
                <p className="mt-3">&copy; 2024 CorperFlex. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default DeviceSelection;
