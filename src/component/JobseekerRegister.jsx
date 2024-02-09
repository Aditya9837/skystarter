import { useState } from "react";
import axios from "axios";
import Style from './Style.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import logo from './image/logo.png'
export default function Register() {
    const [error, setError] = useState('')
    const [first_name, setFirst_name] = useState()
    const [last_name, setLast_name] = useState()
    const [email, setEmail] = useState()
    const [isvalidEmail, setvalidEmail] = useState(true)
    const [password, setPassword] = useState()
    const [isvalidPassword, setvalidPassword] = useState(true)
    const [confirm_password, setconfirm_password] = useState()
    const [ismatchPassword, setmatchPassword] = useState(true)
    const nevigate=useNavigate()
    if(Cookies.get('isJobSeekerLoggedIn')=='true'){
        nevigate('/jobseekerHome')
    }


    const Updatefirst_name = (e) => {
        if (e.target.value.length > 30) {
            setError('Name length shuold be less then 30')
        }
        else {
            setFirst_name(e.target.value)
            setError('')
        }


    }
    const Updatelast_name = (e) => {
        if (e.target.value.length > 30) {
            setError('Name length shuold be less then 30')
        }
        else {
            setLast_name(e.target.value)
            setError('')
        }
    }
    const Update_email = (e) => {
        setEmail(e.target.value)
        const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g
        setvalidEmail(emailregex.test(e.target.value))
        if (!emailregex.test(e.target.value)) {
            setError('Enter Valid Email')
        }
        else {
            setError('')
        }
    }
    const UpdatePassword = (e) => {
        setPassword(e.target.value)
        const password_regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/g
        setvalidPassword(password_regex.test(e.target.value))
        if (!password_regex.test(e.target.value)) {
            setError('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.')
        }
        else {
            setError('')
        }
    }
    const Updateconfirm_password = (e) => {
        setconfirm_password(e.target.value)
        setmatchPassword(password == e.target.value)
        if (password != e.target.value) {
            setError('Password Does\'nt Match')
        }
        else {
            setError('')
        }

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('first_name', first_name)
        formData.append('last_name', last_name)
        formData.append('email', email)
        formData.append('password', password)
        try {
            const response = await axios.post('https://skystarter.pythonanywhere.com/user/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response.data);
            if (response.data['message'] == 'dulicate_entry') {
                setError('Duplicate entry')
            }
            if (response.data['message'] == 'Registered Success') {
                setError('Successfully Registered')
                nevigate('/JobSeekerLogin')
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error or display an error message
        }
    };

    return (<>
        <div className="whole-form-container">
            <div className="animation-container">
                <div className="animation">
                    <img src={logo} alt="Logo" />
                </div>
            </div>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <h1 className="form-title">Hi JobSeeker Register now</h1>
                    <div className="form-group">
                        <label htmlFor='first_name'>First Name:</label>
                        <input type="text" className="form-control" name="first_name" id="first_name" placeholder="Enter your email" onChange={Updatefirst_name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='last_name'>Last Name:</label>
                        <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Enter your email" onChange={Updatelast_name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='email'>Email:</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" onChange={Update_email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='password'>Password:</label>
                        <input type="password" name="password" className="form-control" id="password" placeholder="Enter your password" onChange={UpdatePassword} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='confirm_password'>Confirm Password:</label>
                        <input type="password" name="confirm_password" className="form-control" id="confirm_password" placeholder="Confirm your password" onChange={Updateconfirm_password} />
                    </div>
                    <input type="submit" className="button" value="Register" />
                    <h6 className="text-center error">{error}</h6>
                    <p>If you have already registered, <Link to="/JobSeekerLogin">click here</Link></p>
                </form>
            </div>
        </div>
    </>);
}