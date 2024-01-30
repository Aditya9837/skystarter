import React from 'react';
import team from './image/team.png';
import logo from './image/logo.png';
import mission from './image/mission.png'
import vision from './image/vision.png'

function AboutUs() {
    return (
        <div className="about-us">
            <div className="container">
                <h1>About Skystarter</h1>
                <div className="content">
                    <img src={logo}  className="technical-image" />
                    <div className="text-content">
                        <h2>Our Mission</h2>
                        <p>Welcome to Skystarter - your premier destination for innovative solutions in technology and business!</p>
                    </div>
                </div>

                <div className="content">
                    <div className="text-content">
                        <h2>Our Vision</h2>
                        <p>Our vision is to be a global leader in delivering transformative technology solutions that shape the future and create value for our clients and partners.</p>
                    </div>
                    <img src={vision}  className="technical-image" />
                </div>

                <div className="content">
                    <img src={mission}  className="technical-image" />
                    <div className="text-content">
                        <h2>Core Values</h2>
                        <ul>
                            <li>Innovation: We embrace innovation and continually seek new ways to improve and evolve.</li>
                            <li>Integrity: We operate with honesty, transparency, and integrity in all our dealings.</li>
                            <li>Excellence: We strive for excellence in everything we do, setting high standards and delivering exceptional results.</li>
                            <li>Collaboration: We believe in the power of collaboration and teamwork to achieve shared goals.</li>
                        </ul>
                    </div>
                </div>

                <div className="content">
                    <div className="text-content">
                        <h2>Our Team</h2>
                        <p>Skystarter is powered by a team of dedicated professionals with expertise in technology, business, and innovation. Together, we work tirelessly to turn ideas into reality and drive meaningful impact.</p>
                    </div>
                    <img src={team}  className="technical-image" />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
