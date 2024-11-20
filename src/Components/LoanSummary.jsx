import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoanSummary.css";

const LoanSummary = () => {
    const navigate = useNavigate();
    const currentStep = 4;

    const [loanDuration, setLoanDuration] = useState("3 months"); // Default value
    const [otpEntered, setOtpEntered] = useState("");
    const [otpVerified, setOtpVerified] = useState(false);
    const [showOtpCard, setShowOtpCard] = useState(false);
    const [showLoanAcceptedCard, setShowLoanAcceptedCard] = useState(false);

    const steps = [
        { id: 1, label: "Select Device" },
        { id: 2, label: "Tell Us About Yourself" },
        { id: 3, label: "Verification" },
        { id: 4, label: "Loan Summary" },
        { id: 5, label: "OTP Verification" },
        { id: 6, label: "Select Pickup Option" },
    ];

    const handleDurationChange = (e) => {
        setLoanDuration(e.target.value);
    };

    const handleCancel = () => {
        navigate('/UserDetails');
    };

    const handleProceed = () => {
        // Show OTP card
        setShowOtpCard(true);
    };

    const handleOtpSubmit = () => {
        // Verify OTP - Mock the verification here
        if (otpEntered.length === 4) {
            setOtpVerified(true);
            setShowLoanAcceptedCard(true);
        } else {
            alert("Please enter a valid 4-digit OTP.");
        }
    };

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

            <div className="user-details-content">
                {/* Progress Container and Loan Summary Card Side by Side */}
                <div className="side-by-side-container1">
                    {/* Progress Steps */}
                    <div className="progress-container2">
                        <div className="progress-card">
                            <div className="step-links">
                                {steps.map((step) => (
                                    <li
                                        key={step.id}
                                        className={`step-item ${
                                            currentStep > step.id
                                                ? "completed"
                                                : currentStep === step.id
                                                ? "in-progress"
                                                : ""
                                        }`}
                                    >
                                        <img
                                            src={`/images/Component 9 (${7 - step.id}).svg`}
                                            alt={`Step ${step.id} Icon`}
                                            className="icon"
                                        />
                                        <div className="wrap">
                                            <a
                                                href={`#step${step.id}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    navigate(`/Step${step.id}`);
                                                }}
                                            >
                                                {step.label}
                                            </a>
                                            <div className="status">
                                                {currentStep > step.id && (
                                                    <span className="completed-status">
                                                        Completed
                                                    </span>
                                                )}
                                                {currentStep === step.id && (
                                                    <span className="in-progress-status">
                                                        In Progress
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        {step.id < steps.length && (
                                            <div className="vertical-line"></div>
                                        )}
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Loan Summary Card */}
                    <div className="card custom-shadow">
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">Repayment Summary</h5>

                            {/* Loan Duration Dropdown */}
                            <div className="loan-duration-select">
                                <label htmlFor="loan-duration" className="form-label">
                                    Loan Duration
                                </label>
                                <select
                                    id="loan-duration"
                                    className="form-control"
                                    value={loanDuration}
                                    onChange={handleDurationChange}
                                >
                                    <option value="" disabled>
                                        Choose loan period
                                    </option>
                                    <option value="1 month">1 month</option>
                                    <option value="2 months">2 months</option>
                                    <option value="3 months">3 months</option>
                                    <option value="4 months">4 months</option>
                                </select>
                            </div>

                            <p className="card-text text-muted">Here is a summary of your repayment details</p>

                            {/* Loan Details Section */}
                            <div className="p-3 mb-3 border rounded shadow-sm bg-light">
                                <p className="mb-1"><strong>Amount:</strong> ₦216,000.00k</p>
                                <p className="mb-1"><strong>Duration:</strong> {loanDuration}</p>
                                <p className="mb-1"><strong>Monthly repayment:</strong> ₦20,583.33</p>
                                <p className="mb-1"><strong>Repayment Start Date:</strong> Saturday October 12, 2024</p>
                                <p className="mb-1"><strong>Due date:</strong> Saturday January 12, 2025</p>
                                <p className="mb-1"><strong>Interest per month:</strong> 7.5%</p>
                            </div>

                            {/* Buttons Section */}
                            <div className="d-flex justify-content-between">
                                <button onClick={handleCancel} className="btn btn-outline-secondary btn-sm">
                                    Cancel
                                </button>
                                <button onClick={handleProceed} className="btn14 btn-sm">
                                    Proceed
                                </button>
                            </div>

                            {/* Verified by Remita Text */}
                            <p className="text-center mt-3 text-muted smaller-text">Verified by <span className="text-warning">remita</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background dimming overlay when modal is shown */}
            {(showOtpCard || showLoanAcceptedCard) && <div className="modal-overlay"></div>}

            {/* OTP Verification Card */}
            {showOtpCard && !otpVerified && (
                <div className="otp-verification-card">
                    <h4>OTP Verification</h4>
                    <p>Enter the OTP sent to your phone number</p>
                    <input
                        type="text"
                        value={otpEntered}
                        onChange={(e) => setOtpEntered(e.target.value)}
                        maxLength="4"
                        className="otp-input"
                        placeholder="Enter 4-digit OTP"
                    />
                    <button onClick={handleOtpSubmit} className="btn btn-primary">
                        Submit OTP
                    </button>
                </div>
            )}

            {/* Loan Accepted Card */}
            {showLoanAcceptedCard && (
                <div className="loan-accepted-card">
                    <img src="images/order-approved.svg" alt="Accepted" className="accepted-icon" />
                    <h4>Loan Accepted</h4>
                    <button
                        onClick={() => navigate("/PickupOption")}
                        className="btn btn-success"
                    >
                        Proceed to Pickup
                    </button>
                </div>
            )}
        </div>
    );
};

export default LoanSummary;
