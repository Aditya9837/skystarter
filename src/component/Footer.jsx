import React from 'react';
import './Style.css'; // Import CSS file for styling
import Logo from './image/logo.png';

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-logo'>
                <img src={Logo} className='logo' alt='Logo'></img>
            </div>
            <div className='footer-social'>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin icon"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61555500099385&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook icon"></i>
                </a>
                <a href="https://www.instagram.com/skystarter.life?igsh=Z3V5NDJyNHhwOHow" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram icon"></i>
                </a>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-google icon"></i>
                </a>
                <a href="https://x.com/LifeSkystarter?t=fRLIvBpRcakpTx4JU-fr-A&s=08" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter icon"></i>
                </a>
            </div>
            <div className='footer-info'>
                <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/termsofservice">Terms of Service</a></li>
                    <li><a href="/policies">Privacy Policy</a></li>
                </ul>
            </div>
            <div className='footer-contact'>
                <p>Contact Information:</p>
                <p>Email: skystarter.life@gmail.com</p>
                <p>Phone: +123-456-7890</p>
            </div>
            <div className='footer-copy'>
                <p>&copy; {new Date().getFullYear()} Skystarter.life. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
