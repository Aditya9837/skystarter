import Logo from './image/logo.png'
import Style from './Style.css'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const nevigate=useNavigate()
    const logout=()=>{
             if(Cookies.get('isRecruiterLoggedIn')=='true'){
                Cookies.set('isRecruiterLoggedIn',false)
                Cookies.set('Recruitername',null)
                Cookies.set('Recruiteremail',null)
                Cookies.set('companyName',null)
                Cookies.set('Recruiterid',null)
                nevigate('/recruiterLogin')
             }
             else if(Cookies.get('isJobSeekerLoggedIn')=='true'){
                Cookies.set('isJobSeekerLoggedIn',false)
                Cookies.set('username','')
                Cookies.set('useremail','')
                Cookies.set('user_id','')
                nevigate('/JobSeekerLogin')

             }
            
    }
    return (
        
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={Logo} className='icon-size'></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link  " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/jobs">Jobs</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/jobseekerLogin">Job Seeker</Link></li>
                                    <li><Link className="dropdown-item" to="/recruiterLogin">Recruiter</Link></li>

                                </ul>
                            </li>
                           {Cookies.get('isJobSeekerLoggedIn')=='true' &&  <li className="nav-item">
                                <Link className="nav-link" to="/jobseekerprofile">Jobseeker Profile</Link>
                            </li>}
                           {Cookies.get('isRecruiterLoggedIn')=='true' &&  <li className="nav-item">
                                <Link className="nav-link" to="/jobseekerprofile">Recruiter Profile</Link>
                            </li>}
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact us</Link>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            
                            {
                                (Cookies.get('isRecruiterLoggedIn')=='true' ||Cookies.get('isJobSeekerLoggedIn')=='true') && <button className="button " onClick={logout}>Log out</button> 
                            }
                            {
                                (Cookies.get('isRecruiterLoggedIn')!='true' && Cookies.get('isJobSeekerLoggedIn')!='true' )&& <button className="button" onClick={logout} >Login</button>
                            } 

                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
}