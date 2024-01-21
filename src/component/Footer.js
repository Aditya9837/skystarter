import Style from './Style.css'
import Logo from './image/logo.png'

export default function Footer(){

    return(
        <>
            <div className='Footer'>
               <div className='logo-centered'><img src={Logo} className='icon-size' ></img></div>
              <div className='social-logo'>
              <i className="fa fa-linkedin icon-size linkedin" ></i>
              <p>/</p>
              <i className="fa fa-facebook icon-size linkedin"></i>
              <p>/</p>
              <i className="fa fa-instagram icon-size instagram"></i>
              <p>/</p>
              <i className="fa fa-google icon-size google"></i>
              <p>/</p>
              <i className="fa fa-twitter icon-size linkedin"></i>
              </div>
              <p>&copy;Copyright {new Date().getFullYear()} |All Rights Reserved </p>
            </div>
        </>
    );
}
