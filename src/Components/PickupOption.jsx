import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PickupOption.css";

const PickupOption = () => {
    const navigate = useNavigate();
    const currentStep = 6;

    // State variables for form inputs
    const [pickupOption, setPickupOption] = useState("");
    const [campLocation, setCampLocation] = useState("");
    const [storeAddress, setStoreAddress] = useState("");

    // State for popup visibility
    const [showPopup, setShowPopup] = useState(false);

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
        // Show the Congratulations popup
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
        navigate("/LandingPage"); // Navigate back to LandingPage
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <a
                    href="/LandingPage"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/LandingPage");
                    }}
                >
                    <img
                        src="/images/Corperflex Logo.svg"
                        alt="Logo"
                        className="logo"
                    />
                </a>
            </nav>

            <div className="Pickup-details-content">
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

                    {/* Form Section */}
                    <div className="card custom-shadow">
                        <div className="card-body">
                            <h5 className="card-title text-center">
                                Pickup Option
                            </h5>
                            <p className="text-center">
                                We need to validate your information, for that we
                                require some personal data.
                            </p>

                            <form onSubmit={handleSubmit}>
                                {/* Camp Pickup Option */}
                                <div className="custom-radio-card" id="campCard">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="pickupOption"
                                        id="campPickup"
                                        value="camp"
                                        checked={pickupOption === "camp"}
                                        onChange={() => setPickupOption("camp")}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="campPickup"
                                    >
                                        Camp pickup
                                    </label>
                                </div>

                                {pickupOption === "camp" && (
                                    <div
                                        id="campDropdown"
                                        className="form-group mt-2"
                                    >
                                        <label htmlFor="campLocation">
                                            Select camp location
                                        </label>
                                        <select
                                            className="form-control"
                                            id="campLocation"
                                            value={campLocation}
                                            onChange={(e) =>
                                                setCampLocation(e.target.value)
                                            }
                                        >
                                            <option value="">Choose...</option>
                                            <option value="camp1">Camp 1</option>
                                            <option value="camp2">Camp 2</option>
                                            <option value="camp3">Camp 3</option>
                                        </select>
                                    </div>
                                )}

                                {/* Store Pickup Option */}
                                <div className="custom-radio-card" id="storeCard">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="pickupOption"
                                        id="storePickup"
                                        value="store"
                                        checked={pickupOption === "store"}
                                        onChange={() =>
                                            setPickupOption("store")
                                        }
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="storePickup"
                                    >
                                        Store pickup
                                    </label>
                                </div>

                                {pickupOption === "store" && (
                                    <div
                                        id="storeInput"
                                        className="form-group mt-2"
                                    >
                                        <label htmlFor="storeAddress">
                                            Enter store address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="storeAddress"
                                            placeholder="Store address"
                                            value={storeAddress}
                                            onChange={(e) =>
                                                setStoreAddress(e.target.value)
                                            }
                                        />
                                    </div>
                                )}

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

            {/* Dimmed Background */}
            {showPopup && <div className="modal-overlay"></div>}

            {/* Congratulations Popup */}
            {showPopup && (
                <div className="otp-verification-card">
                    <img
                        src="/images/congrats.svg"
                        alt="Congratulations"
                        className="accepted-icon"
                    />
                    <h4>Congratulations</h4>
                    <p>An email has been sent to you for pick up information!</p>
                    <button onClick={handlePopupClose} className="btn btn-primary">
                        Back to Home
                    </button>
                </div>
            )}
        </div>
    );
};

export default PickupOption;
