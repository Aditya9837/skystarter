

import React, { useState,useRef } from 'react';
import axios from 'axios';
import Style from './Style.css'

function OTPForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [otp, setOTP] = useState(['', '', '', '']);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleChange = (index, value) => {
        const newOTP = [...otp];
        newOTP[index] = value;
        setOTP(newOTP);

        // Move to the next input box
        if (value !== '' && index < 3) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
            inputRefs[index - 1].current.focus();
        }
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData=new FormData()
            formData.append('email',email)
            await axios.post('https://skystarter.pythonanywhere.com/otpforjobseeker/', formData,{
                headers:{
                    "Content-Type":'multipart/form-data',
                }
            }).then((response)=>{
                console.log(response.data)
                if(response.data['message']=='success')
                {
                    
                    document.getElementById('otp-form').style.display='block'
                }

            }).catch((error)=>{
                console.log(error)
            });
            
        } catch (error) {
            setMessage('Failed to send OTP. Please try again later.');
        }
    };
    const css={
        display:'none'
    }

    return (
        <>
        {otp}
            <div className='form'>
                <h5 className='logo-centered'>Validate OTP</h5>
                <form className='' onSubmit={handleSubmit}>
                    <label htmlFor='email'>Enter email:</label>
                    <input type="email" name='email' required className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <button type="submit" className='btn btn-warning'>Send OTP</button>
                </form>
                <form className='' id='otp-form' style={css} onSubmit={handleSubmit}>
                    <label htmlFor='email'>Enter OTP:</label>
                    <div className='jobs'>
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={value}
                                className='otp-input'
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                ref={inputRefs[index]}
                            />
                        ))}
                    </div>
                    <br />
                    <button type="submit" className='btn'>Send OTP</button>
                </form>

            </div>

        </>

    );
}

export default OTPForm;
