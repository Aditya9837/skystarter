import { useState } from "react";
import { Link } from "react-router-dom";
import Style from './Style.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
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
            <form className="form" onSubmit={handleSubmit}>
                <div className="blur">
                    <h1 className="logo-centered">Welcome</h1>
                    <div className="form-group">
                        <label htmlFor='email'>Email:</label>
                        <input type="email" className="form-control" name="email" onChange={UpdateEmail} id="email" placeholder="Enter your email"></input>
                        {
                            !isvalidEmail && <label className="error">Enter Valid Email</label>
                        }
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor='password'>Password:</label>
                        <input type="password" name="password" className="form-control" id="password" onChange={Updatepass} placeholder="Enter your password"></input>
                        {
                            !isvalidPass && <label className="error">Enter Valid Password</label>
                        }
                    </div>
                    <br />
                    <input type="submit" className="btn btn-primary" value='Login'></input>
                    <p>If You dont have account<i className="fa fa-question"></i> <Link to='/jobseekerRegister'>&nbsp;click here</Link></p>
                </div>
            </form>
        </>
    );
}