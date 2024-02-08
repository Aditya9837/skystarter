import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from './image/logo.png'


export default function Contact() {
    const [error, setError] = useState('')
    const [name ,setName] = useState()
    const [email, setEmail] = useState()
    const [isvalidEmail, setvalidEmail] = useState(true)
    const [phone,setPhone] = useState()
    const [isvalidPhone, setvalidPhone] = useState()
    const [subject,setSubject] = useState()
    const [message,setMessage] = useState()

    function showMessage(message, type) {
        var messageContainer = document.getElementById("messageContainer");
        
        // Set background color based on the message type
        var backgroundColor;
        switch(type) {
            case "success":
                backgroundColor = "lightgreen";
                break;
            case "error":
                backgroundColor = "lightcoral";
                break;
            case "warning":
                backgroundColor = "lightsalmon";
                break;
            default:
                backgroundColor = "lightgray";
                break;
        }
        
        // Apply styles and display the message
        messageContainer.textContent = message;
        messageContainer.style.backgroundColor = backgroundColor;
        messageContainer.style.display = "block";
        
        // Hide the message after 20 seconds
        setTimeout(function() {
            messageContainer.style.display = "none";
        }, 5000);
    }

    const UpdateName = (e) => {
        setName(e.target.value)
    }

    const UpdateEmail = (e) => {
        setEmail(e.target.value)
        setvalidEmail(() => {
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
            if (regex.test(e.target.value)) {
                return true;
            }
            else {
                return
            }
        })
    }
    const UpdatePhone = (e) => {
        setPhone(e.target.value)
        setvalidPhone(() => {
            const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/g
            if (regex.test(e.target.value)) {
                return true;
            }
            else {
                return
            }
        })
    }

    const UpdateSubject = (e) => {
        setSubject(e.target.value)
    }
    const UpdateMessage= (e) => {
        setMessage(e.target.value)
    }
    const handleSubmit= async(e)=>{
        const pleaseWait = document.getElementById('please-wait')
        pleaseWait.style.display='block'
        e.preventDefault()
        const formData=new FormData()
        formData.append('name',name)
        formData.append('email',email)
        formData.append('phone',phone)
        formData.append('subject',subject)
        formData.append('message',message)
        await axios.post('https://skystarter.pythonanywhere.com/contact/',formData,{
            headers:{
                "Content-Type":'multipart/form-data',
            }
        }).then((response)=>{
            if(response.data['message']=='success')
            {
                pleaseWait.style.display='none'
                showMessage('Message sent','success')
                setEmail('')
                setMessage('')
                setName('')
                setPhone('')
                setSubject('')
                
            }
        }).catch((error)=>{
            showMessage(error,'error')
        })
    }

    return (
        <>
         <div className="whole-form-container">
            <div className="animation-container">
                <div className="animation">
                    <img src={logo} alt="Logo" />
                </div>
            </div>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <h1 className="form-title">Hello</h1>
                    <div className="form-group">
                        <label htmlFor='name'>Name:</label>
                        <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name" onChange={UpdateName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='email'>Email:</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" onChange={UpdateEmail}/>
                        {
                                !isvalidEmail && <label className="error" >Enter Valid Email</label>
                            }

                    </div>
                    <div className="form-group">
                        <label htmlFor='phone'>Phone:</label>
                        <input type="number" className="form-control" name="phone" id="phone" placeholder="Enter your phone number" onChange={UpdatePhone}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='subject'>Subject:</label>
                        <input type="text" name="password" className="form-control" id="subject" placeholder="Enter your subject" onChange={UpdateSubject} />
                    </div>
                    <div className="form-group">
                        <label htmlFor='message'>Message:</label>
                        <input type="text" name="message" className="form-control" id="message" placeholder="Enter your message" onChange={UpdateEmail} />
                    </div>
                    <input type="submit" className="button"/>
                    <h6 className="text-center error">{error}</h6>
                    <p>Your Information is secured <Link to="/">Home</Link></p>
                </form>
            </div>
        </div>



        </>
    );
}