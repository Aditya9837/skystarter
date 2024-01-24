import { useState } from "react";
import { Link } from "react-router-dom";
import Style from './Style.css'

export default function JobSeekerLogin() {
    const [email, setEmail] = useState()
    const [isvalidEmail, setvalidEmail] = useState(true)
    const [pass, setPass] = useState()
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


            <form className="form">
                <div className="blur">
                    
                <h1 className="logo-centered">Welcome</h1>
                <div className="form-group">
                    <label htmlFor='email'>Email:</label>
                    <input type="email" className="form-control1" name="email" onChange={UpdateEmail} id="email" placeholder="Enter your email"></input>
                    {
                        !isvalidEmail && <label className="error">Enter Valid Email</label>
                    }
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor='password'>Password:</label>
                    <input type="password" name="password" className="form-control1" id="password" onChange={Updatepass} placeholder="Enter your password"></input>
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