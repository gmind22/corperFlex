import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserDetails.css";

const UserDetails = () => {
    const navigate = useNavigate();
    const currentStep = 2; 

    const steps = [
        { id: 1, label: "Select Device" },
        { id: 2, label: "Tell Us About Yourself" },
        { id: 3, label: "Verification" },
        { id: 4, label: "Loan Summary" },
        { id: 5, label: "OTP Verification" },
        { id: 6, label: "Select Pickup Option" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/LoanSummary'); 
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
                {/* Progress Container and Form Side by Side */}
                <div className="side-by-side-container">
                    {/* Progress Steps */}
                    <div className="progress-container1">
                        <div className="progress-card">
                            <div className="step-links">
                                {steps.map((step) => (
                                    <li
                                        key={step.id}
                                        className={`step-item ${
                                            currentStep > step.id
                                                ? 'completed' 
                                                : currentStep === step.id
                                                ? 'in-progress'
                                                : ''
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

                    {/* Form Section */}
                    <div className="custom-card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Tell us about yourself</h5>
                            <p className="text-center">
                                We need to validate your information. For that, we require some personal data.
                            </p>
                            <form 
                                className="user-details-form"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    navigate('/LoanSummary');
                                }}
                            >
                                <div className="form-group">
                                    <label htmlFor="bvn">Bank Verification Number (BVN)</label>
                                    <input
                                        type="text"
                                        id="bvn"
                                        className="form-control"
                                        placeholder="1234567890123"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        className="form-control"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        className="form-control"
                                        placeholder="+234 7031 879 3456"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="account">Account Number</label>
                                    <input
                                        type="text"
                                        id="account"
                                        className="form-control"
                                        placeholder="2345678901"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bankname">Bank Name</label>
                                    <select id="bankname" className="form-control" required>
                                        <option value="">Choose...</option>
                                        <option>Access Bank</option>
                                        <option>GTB</option>
                                        <option>UBA</option>
                                        <option>Sterling Bank</option>
                                        <option>EcoBank</option>
                                        <option>Zenith Bank</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">State of Deployment</label>
                                    <select id="state" className="form-control" required>
                                        <option value="">Choose...</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="completionDate">NYSC Completion Date</label>
                                    <input
                                        type="date"
                                        id="completionDate"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Proceed to verify
                                </button>
                            </form>
                            <div className="text-center mt-3">
                                <small>Verified by Remita</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
