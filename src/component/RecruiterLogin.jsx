import { useState } from "react";
import { Link } from "react-router-dom";
import Style from './Style.css'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";
import logo from './image/logo.png'
export default function RecruiterLogin() {
    const nevigate=useNavigate()
    if(Cookies.get('isRecruiterLoggedIn')=='true'){
        nevigate('/recruiterHome')
    }
    const [Email, setEmail] = useState()
    const [isvalidEmail, setvalidEmail] = useState(true)
    const [Password, setPassword] = useState()
    const [isvalidPassword, setvalidPassword] = useState(true)
    const UpdateEmail = (e) => {
        setEmail(e.target.value)
        setvalidEmail(() => {
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
            if (regex.test(e.target.value)) {
                return true;
            }
            else {
                return false;
            }
        })
    }
    const UpdatePassword = (e) => {
        setPassword(e.target.value)
        setvalidPassword(() => {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
            if (regex.test(e.target.value)) {
                return true;
            }
            else {
                return false;
            }
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('email', Email)
        formData.append('password', Password)
        try {
            const response = await axios.post('https://skystarter.pythonanywhere.com/recruiter/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response.data)
            if(response.data['message']=='dulicate_entry')
            {
                alert('Please enter valid email and password')
            }
            else if(response.data['data']['id']!=null){
                Cookies.set('isRecruiterLoggedIn',true)
                Cookies.set('isJobSeekerLoggedIn',false)
                Cookies.set('Recruitername',response.data['data']['contact_person'])
                Cookies.set('Recruiteremail',response.data['data']['username'])
                Cookies.set('companyName',response.data['data']['company_name'])
                Cookies.set('Recruiterid',response.data['data']['id'])
                nevigate('/recruiterHome')
            }
            else{
                alert('Please enter valid email and password')
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error or display an error message
        }
    };
    return (
        <>

<div className="whole-form-container">
            <div className="animation-container">
                {/* Add your animation or image card here */}
                
                <div className="animation">
                    <img src={logo} />
                </div>
            </div>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <h1 className="form-title">Welcome</h1>
                    <div className="form-group">
                        <label htmlFor='email'>Email:</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" onChange={UpdateEmail} />
                        {
                            !isvalidEmail && <label className="error">Enter Valid Email</label>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor='password'>Password:</label>
                        <input type="password" name="password" className="form-control" id="password" placeholder="Enter your password" onChange={UpdatePassword}/>
                        {
                            !isvalidPassword && <label className="error">Enter Valid Password</label>
                        }
                    </div>
                    <input type="submit" className="button" value="Login" />
                    <p>If You don't have an account,<i className="fa fa-question"></i>  <Link to='/recruiterRegister'>click here</Link></p>
                </form>
            </div>
        </div>
        </>
    );
}