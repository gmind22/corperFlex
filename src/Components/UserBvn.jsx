import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./UserBvn.css";

const UserBvn = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(2); // Define the current step as Step 2 (this component)

    // List of steps and their labels
    const steps = [
        { id: 1, label: "Select Device" },
        { id: 2, label: "Tell Us About Yourself" },
        { id: 3, label: "Verification" },
        { id: 4, label: "Loan Summary" },
        { id: 5, label: "OTP Verification" },
        { id: 6, label: "Select Pickup Option" },
    ];

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <a
                    href="/LandingPage"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/LandingPage');
                    }}
                >
                    <img
                        src="/images/Corperflex Logo.svg"
                        alt="Logo"
                        className="logo"
                    />
                </a>
            </nav>

            <div className="bvn-content">
                {/* Progress Steps */}
                <div className="progress-container">
                    <div className="progress-card1">
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
                                        <a
                                            href={`#step${step}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate(`/Step${step}`);
                                            }}
                                        >
                                            {steps.find(s => s.id === step)?.label}
                                        </a>
                                        <div className="status">
                                            {currentStep > step && (
                                                <span className="completed-status">
                                                    Completed
                                                </span>
                                            )}
                                            {currentStep === step && (
                                                <span className="in-progress-status">
                                                    In Progress
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {step < 6 && (
                                        <div className="vertical-line"></div>
                                    )}
                                </li>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="col-md-8">
                    <div className="form-container shadow p-4">
                        <h2>Tell us about yourself</h2>
                        <p>
                            We need to validate your information. For that, we
                            require some personal data.
                        </p>
                        <form>
                            <div className="form-group">
                                <label htmlFor="bvn">
                                    Bank Verification Number (BVN)
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="bvn"
                                    placeholder="Enter your BVN"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mt-3"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserBvn;
