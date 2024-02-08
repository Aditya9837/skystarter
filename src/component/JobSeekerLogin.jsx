import { useState } from "react";
import { Link } from "react-router-dom";
import Style from './Style.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import logo from './image/logo.png'
export default function JobSeekerLogin() {
    const nevigate = useNavigate()
    if (Cookies.get('isJobSeekerLoggedIn') == 'true') {
        nevigate('/jobseekerHome')
    }
    const [email, setEmail] = useState()
    const [isvalidEmail, setvalidEmail] = useState(true)
    const [password, setPass] = useState()
    const [isvalidPass, setvalidPass] = useState(true)
    const Updatepass = (e) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
        setPass(e.target.value);
        setvalidPass(() => {
            if (regex.test(e.target.value)) {
                return true
            }
            else {
                return false
            }
        }
        )
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)
        try {
            const response = await axios.post('https://skystarter.pythonanywhere.com/user/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response.data['message'])
            if (response.data['message'] == 'dulicate_entry') {
                alert('Please enter valid email and password')
            }
            else if (response.data['data']['id'] != null) {
                Cookies.set('isJobSeekerLoggedIn', true)
                Cookies.set('isRecruiterLoggedIn',false)
                Cookies.set('username', response.data['data']['first_name'])
                Cookies.set('useremail', response.data['data']['username'])
                Cookies.set('user_id', response.data['data']['id'])
                nevigate('/jobseekerHome')
            }
            else {
                alert('Please enter valid email and password')
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error or display an error message
        }
    };
    const UpdateEmail = (e) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        setEmail(e.target.value);
        setvalidEmail(() => {
            if (regex.test(e.target.value)) {
                return true
            }
            else {
                return false
            }
        }
        )
    }
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
                        <input type="password" name="password" className="form-control" id="password" placeholder="Enter your password" onChange={Updatepass}/>
                        {
                            !isvalidPass && <label className="error">Enter Valid Password</label>
                        }
                    </div>
                    <input type="submit" className="button" value="Login" />
                    <p>If You don't have an account,<i className="fa fa-question"></i>  <Link to='/jobseekerRegister'>click here</Link></p>
                </form>
            </div>
        </div>
        </>
    );
}