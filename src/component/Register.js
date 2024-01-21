import { useState } from "react";
import Style from './Style.css'
export default function Register() {
    const [error,setError]=useState('error')
    
    return (<>
        <form className="form">
            <h1 className="center">Register&nbsp;now</h1>
            
            <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input type="text" name='first_name' placeholder="First Name" className="form-control control" />
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name='last_name' placeholder="Last Name" className="form-control control" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name='email' placeholder="Email" className="form-control control" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name='password' placeholder="Password" className="form-control control" />
            </div>
            <div className="form-group">
                <label htmlFor="confirm_password">Confirm-Password</label>
                <input type="text" name='confirm_password' placeholder="Confirm Password" className="form-control control" />
            </div>
            <div className="form-group">
                <select className="form-control">
                    <option value='select'>Select Type</option>
                    <option value='Jobseeker'>Job Seeker</option>
                    <option value='Recruiter'>Recruiter</option>
                </select>
            </div>
            <br/>
            <div className="form-group social-logo">
            <input type="submit " value='Register' className="btn btn-primary"></input>
                <h6 className="text-center error">{error}</h6>
            </div>
        </form>
    </>);
}