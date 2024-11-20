import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DeviceCard.css';

const devices = [
    {
        name: "Samsung A15 (4GB + 128GB/4G)",
        displaySize: "6.5 inches",
        network: "4G LTE",
        camera: "50 MP",
        memory: "4GB/128GB",
        battery: "5000mAh",
        processor: "Octa-core",
        price: "N240,500",
        image: "/images/A15.png",
    },
    {
        name: "Samsung A06 (4GB + 64GB)",
        displaySize: "6.5 inches",
        network: "4G LTE",
        camera: "48 MP",
        memory: "4GB/64GB",
        battery: "5000mAh",
        processor: "Quad-core",
        price: "N146,500",
        image: "/images/A06.png",
    },
    {
        name: "Samsung A05 (4GB + 64GB)",
        displaySize: "6.5 inches",
        network: "4G LTE",
        camera: "48 MP",
        memory: "4GB/64GB",
        battery: "5000mAh",
        processor: "Quad-core",
        price: "N127,000",
        image: "/images/A05 1.png",
    },
    {
        name: "Samsung A06 (4GB + 128GB)",
        displaySize: "6.5 inches",
        network: "4G LTE",
        camera: "48 MP",
        memory: "4GB/128GB",
        battery: "5000mAh",
        processor: "Quad-core",
        price: "N156,500",
        image: "/images/A06.png",
    },
    {
        name: "Samsung A05 (4GB + 128GB)",
        displaySize: "6.5 inches",
        network: "4G LTE",
        camera: "48 MP",
        memory: "4GB/128GB",
        battery: "5000mAh",
        processor: "Quad-core",
        price: "N211,000",
        image: "/images/A05 1.png",
    },
    // Add other devices here
];

const DeviceCard = () => {
    const { deviceName } = useParams();
    const decodedDeviceName = decodeURIComponent(deviceName);
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);

    const selectedDevice = devices.find((device) => device.name === decodedDeviceName);

    if (!selectedDevice) {
        return (
            <div className="device-card-page">
                <nav className="navbar">
                    <img src="/images/Corperflex Logo.svg" alt="Logo" className="logo" />
                </nav>
                <div className="error-message">
                    <h2>Device Not Found</h2>
                    <p>The device you selected does not exist. Please go back and select a valid device.</p>
                    <button onClick={() => navigate('/devices')} className="go-back-button">
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="device-card-page">
            {/* Navbar */}
            <nav className="navbar">
                <a href='/LandingPage' onClick={(e) => {
                    e.preventDefault();
                    navigate('/LandingPage');
                }}>
                    <img src="/images/Corperflex Logo.svg" alt="Logo" className="logo" />
                </a>
            </nav>

            <div className="device-content">
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

                <div className="cards-container">
                    {/* Device Info Cards */}
                    <div className="device-info">
                        {/* Card for Device Name and Image */}
                        <div className="device-image-card">
                            <button className="device-name">{selectedDevice.name}</button>
                            <img
                                src={selectedDevice.image}
                                alt={selectedDevice.name}
                                className="device-image"
                            />
                        </div>

                        {/* Card for Device Specifications */}
                        <div className="device-specs-card">
                            <h3>Phone Specifications</h3>
                            <ul>
                                <li>
                                    <strong>Display size:</strong> {selectedDevice.displaySize}
                                </li>
                                <li>
                                    <strong>Network:</strong> {selectedDevice.network}
                                </li>
                                <li>
                                    <strong>Camera:</strong> {selectedDevice.camera}
                                </li>
                                <li>
                                    <strong>Memory:</strong> {selectedDevice.memory}
                                </li>
                                <li>
                                    <strong>Battery:</strong> {selectedDevice.battery}
                                </li>
                                <li>
                                    <strong>Processor:</strong> {selectedDevice.processor}
                                </li>
                            </ul>
                            <button className='price'>
                                <p className="device-price">
                                    <strong>Price:</strong> {selectedDevice.price}
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Proceed Button */}
            <div className="proceed-button-container">
                <button
                    className="proceed-button"
                    onClick={() => navigate('/UserBvn')}
                >
                    Proceed
                </button>
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

export default DeviceCard;
