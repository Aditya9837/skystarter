import { useState } from "react";
import { Link } from "react-router-dom";
import Style from './Style.css'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";
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

            <form className="form" onSubmit={handleSubmit}>
                <div className="blur">
                    <div>
                        <h1 className="logo-centered">Welcome,Recruiter</h1>
                        <div className="form-group ">
                            <label htmlFor='email'>Email:</label>
                            <input type="email" className="form-control" name="email" id="email" onChange={UpdateEmail} placeholder="Enter your email"></input>

                            {
                                !isvalidEmail && <label className="error">Enter Valid Email</label>
                            }
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor='password'>Password:</label>
                            <input type="password" name="password" onChange={UpdatePassword} className="form-control" id="password" placeholder="Enter your password"></input>
                            {
                                !isvalidPassword && <label className="error">Enter Valid Password</label>
                            }
                        </div>
                        <br />
                        <input type="submit" className="btn" value='Login'></input>
                        <br/>
                        <Link to ='/otp' >Forgot password<i className="fa fa-question"></i> </Link>
                        <p>If You dont have account<i className="fa fa-question"></i> <Link to='/recruiterRegister'>&nbsp;click here</Link></p>
                    </div>
                </div>
            </form>
        </>
    );
}