import axios from "axios";
import { useState } from "react";


export default function Contact() {
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
         <div className='float-error' id='messageContainer'>
          
          </div>
            <div class="container mt-5 pad10">



                <form className="form" onSubmit={handleSubmit}>
                    <div className="blur">
                        <div className="logo-centered">
                            <h2>Contact Us</h2>
                        </div>
                        <div class="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" class="form-control" value={name} required onChange={UpdateName} id="name" placeholder="Enter your name" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" class="form-control" value={email} required onChange={UpdateEmail} id="email" placeholder="Enter your email" />
                            {
                                !isvalidEmail && <label className="error" >Enter Valid Email</label>
                            }
                        </div>
                        <div class="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="phone" class="form-control" value={phone} required onChange={UpdatePhone} id="phone" placeholder="Enter your mobile number" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" class="form-control" value={subject} required onChange={UpdateSubject} id="subject" placeholder="Enter the subject" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea class="form-control" id="message" value={message} required onChange={UpdateMessage} rows="4" placeholder="Enter your message"></textarea>
                        </div>
                        <br />
                        <button type="submit" class="btn ">Submit</button> <p id="please-wait" className="float-error">Please Wait</p>
                    </div>

                </form >

            </div >



        </>
    );
}