import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();
    
    return (
        <div className="landing-page">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src={process.env.PUBLIC_URL + "/images/Corperflex Logo.svg"}
                        alt="Logo"
                        className="logo"
                    />
                </a>
                <a
                href="/DeviceSelection"
                className="btn12"
                onClick={(e) => {
                    e.preventDefault(); // Prevent full reload
                    navigate('/DeviceSelection');
                }}
            >
                Apply Now
            </a>
            </div>
        </nav>
        <div className="image-container col-lg-5 col-md-6 col-sm-8 col-10">
            <img 
            src={process.env.PUBLIC_URL + "/images/Vector 1 (Stroke).svg"}alt="Background Image">
            </img>
        </div>
        <div className="container">
            <div className="circle-container col-lg-5 col-md-6 col-sm-8 col-10">
            <div className="circle"></div>
        </div>
    </div>

        {/* Hero Section */}
        <div className="hero-section text-center my-5">
            <div className="container">
                <h1>
                    Own a <span>Samsung phone</span>, pay less <br />
                    than 50% of your allowee monthly!
                </h1>
                <p>Flex with Zero Upfront. Own now, Pay later</p>
                <a href="/DeviceSelection.jsx" className="btn13 btn-lg" onClick={(e) => {
                    e.preventDefault(); // Prevent full reload
                    navigate('/DeviceSelection');
                }}>
                    Apply Now <img src={process.env.PUBLIC_URL + "/images/arrow-left-02.svg"} alt="touch it" />
                </a>
            </div>
        </div>

        {/* How It Works Section */}
        <section className="how-it-works" id='how-it-works'>
            <div className="container">
                <h2 className="text-center">How it <span>works?</span></h2>
                <div className="row my-5">
                    {[
                        { id: 1, title: "Select a device", p: "1", img: "/images/Frame sd.svg" },
                        { id: 2, title: "Enter necessary information", p: "2", img: "/images/Frame eni.svg" },
                        { id: 3, title: "Get approval", p: "3", img: "/images/Frame ga.svg" },
                        { id: 4, title: "Select pickup option", p: "4", img: "/images/Frame spp.svg" },
                    ].map((step) => (
                        <div key={step.id} className="col-sm-12 col-md-6 col-xl-6 mb-4">
                            <div className="card">
                                
                                <div className="card-header">
                                    <h5 className="card-title">{step.title}</h5>
                                    <div className="icon">
                                        <p>{step.p}</p>
                                    </div>
                                </div>
                                <img
                                    src={process.env.PUBLIC_URL + step.img}
                                    alt={step.title}
                                    className="card-img-top"
                                />
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/*Who can apply section*/}
        <section className="who-can-apply">
            <div className="blue-card col-sm-12 col-md-6 col-xl-6 mb-4">
                <div className="content">

                <div className="apply">
                    <h2>Who can apply?</h2>
                    <div className="container-icon"><img src={process.env.PUBLIC_URL + "/images/Dawn.svg"}
                    alt="" /><p> To be eligible, you must: <br></br> Be a serving NYSC Corper <br></br>with a Valid ID Card</p>
                    </div>
                    <div className="container-icon"><img src={process.env.PUBLIC_URL + "/images/Dawn.svg"}
                    alt="" /> <p>Having a minimum of <br></br>4 months remaining in your service year.</p></div>
                    <a href="/DeviceSelection.jsx" className="btn btn-custom" onClick={(e) => {
                        e.preventDefault(); // Prevent full reload
                        navigate('/DeviceSelection');
                    }}>
                        <div className='shift'>
                            Apply now <img src="/images/arrow-left green.svg" alt="touch it" />
                        </div> 
                    </a>
                  </div>
                  <img src="/images/Lady search.svg" alt="Apply Now Image" />
                </div>
              </div>
        </section>


        {/* Footer */}
        <footer className="footer bg-dark text-white py-3 text-center">
            <div className="container">
                <a href="#">
                    <img
                        src={process.env.PUBLIC_URL + "/images/Corperflex Logo.svg"}
                        alt="Footer Logo"
                        className="logo-footer"
                    />
                </a>
                <div className="mt-3">
                    <a href="#how-it-works" className="text-white me-3">How it Works</a>
                    <a href="#contact" className="text-white">Contact Us</a>
                </div>
            </div>
            <p className="mt-3">&copy; 2024 CorperFlex. All rights reserved.</p>
        </footer>
    </div>
);
};

export default LandingPage;