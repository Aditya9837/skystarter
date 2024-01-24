import Style from './Style.css'
import Logo from './image/logo.png'

export default function Footer(){

    return(
        <>
            <div className='Footer'>
               <div className='logo-centered'><img src={Logo} className='icon-size' ></img></div>
              <div className='social-logo'>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin icon-size linkedin" ></i>
              </a>
              <p>/</p>
              <a href="https://www.facebook.com/profile.php?id=61555500099385&mibextid=ZbWKwL"  target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook icon-size linkedin"></i>
              </a>
              <p>/</p>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram icon-size instagram"></i>
              </a>
              <p>/</p>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-google icon-size google"></i>
              </a>
              <p>/</p>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter icon-size linkedin"></i>
              </a>
              </div>
              <p>&copy;Copyright {new Date().getFullYear()} |All Rights Reserved </p>
            </div>
        </>
    );
}
