import { useState } from "react";
import axios from "axios";
import Style from './Style.css'
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
    const [choice, setchoice] = useState()




    const Updatefirst_name = (e) => {
        if(e.target.value.length>30 ){
            setError('Name length shuold be less then 30')
        }
        else{
            setFirst_name(e.target.value)
            setError('')
        }
       

    }
    const Updatelast_name = (e) => {
        if(e.target.value.length>30 ){
            setError('Name length shuold be less then 30')
        }
        else{
            setLast_name(e.target.value)
            setError('')
        }
    }
    const Update_email = (e) => {
        setEmail(e.target.value)
        const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g
        setvalidEmail(emailregex.test(e.target.value))
        if(!isvalidEmail){
            setError('Enter Valid Email')
        }
        else{
            setError('')
        }
    }
    const UpdatePassword = (e) => {
        setPassword(e.target.value)
        const password_regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/g
        setvalidPassword(password_regex.test(e.target.value))
        if(!isvalidPassword){
            setError('Enter Valid Password')
        }
        else{
            setError('')
        }
    }
    const Updateconfirm_password = (e) => {
        setconfirm_password(e.target.value)
        setmatchPassword(password == e.target.value)
        if(!ismatchPassword){
            setError('Password Does\'nt Match')
        }
        else{
            setError('')
        }

    }
    const UpdateChoice = (e) => {
        setchoice(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('first_name', first_name)
        formData.append('last_name', last_name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('user_type', choice)
        try {
            const response = await axios.post('https://skystarter.pythonanywhere.com/user/', formData,{
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
            console.log('Response:', response.data);
            if(response.data['message']=='duplicate_entry')
            {
                setError('Duplicate entry')
            }
            if(response.data['message']=='Registered Success')
            {
                setError('Successfully Registered')
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error or display an error message
        }
    };

    return (<>
        <form className="form" onSubmit={ handleSubmit}>
            <h1 className="center">Register&nbsp;now</h1>

            <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input type="text" name='first_name' placeholder="First Name" onChange={Updatefirst_name} className="form-control control" />
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name='last_name' placeholder="Last Name" onChange={Updatelast_name} className="form-control control" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name='email' placeholder="Email" onChange={Update_email} className="form-control control" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name='password' placeholder="Password" onChange={UpdatePassword} className="form-control control" />
            </div>
            <div className="form-group">
                <label htmlFor="confirm_password">Confirm-Password</label>
                <input type="text" name='confirm_password' placeholder="Confirm Password" onChange={Updateconfirm_password} className="form-control control" />
            </div>
            <div className="form-group">
                <select className="form-control" onChange={UpdateChoice}>
                    <option value='select'>Select Type</option>
                    <option value='Jobseeker'>Job Seeker</option>
                    <option value='Recruiter'>Recruiter</option>
                </select>
            </div>
            <br />
            <div className="form-group social-logo">
                <button type="submit "  className="btn btn-primary">Register</button>
                <h6 className="text-center error">{error}</h6>
            </div>
        </form>
    </>);
}