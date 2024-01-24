import { useState } from "react";
import { Link } from "react-router-dom";
import Style from './Style.css'


export default function RecruiterLogin() {
    const [Email, setEmail] = useState()
    const [isvalidEmail, setvalidEmail] = useState(true)
    const [Pass, setPassword] = useState()
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
    return (
        <>

            <form className="form">
                <div className="blur">
                    <div>
                        <h1 className="logo-centered">Welcome,Recruiter</h1>
                        <div className="form-group ">
                            <label htmlFor='email'>Email:</label>
                            <input type="email" className="form-control1" name="email" id="email" onChange={UpdateEmail} placeholder="Enter your email"></input>

                            {
                                !isvalidEmail && <label className="error">Enter Valid Email</label>
                            }
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor='password'>Password:</label>
                            <input type="password" name="password" onChange={UpdatePassword} className="form-control1" id="password" placeholder="Enter your password"></input>
                            {
                                !isvalidPassword && <label className="error">Enter Valid Password</label>
                            }
                        </div>
                        <br />
                        <input type="submit" className="btn btn-primary" value='Login'></input>
                        <p>If You dont have account<i className="fa fa-question"></i> <Link to='/recruiterRegister'>&nbsp;click here</Link></p>
                    </div>
                </div>
            </form>
        </>
    );
}