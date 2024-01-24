import { useState } from "react";


export default function Contact() {
    const [Email, setEmail] = useState()
    const [isvalidEmail, setvalidEmail] = useState(true)

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


    return (
        <>
            <div class="container mt-5 pad10">
            

               
                <form className="form">
                <div className="blur">
                <div className="logo-centered">
                    <h2>Contact Us</h2>
                </div>
                        <div class="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" class="form-control1" id="name" placeholder="Enter your name" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" class="form-control1" onChange={UpdateEmail} id="email" placeholder="Enter your email" />
                            {
                                !isvalidEmail && <label className="error" >Enter Valid Email</label>
                            }
                        </div>
                        <div class="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="phone" class="form-control1" id="phone" placeholder="Enter your mobile number" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" class="form-control1" id="subject" placeholder="Enter the subject" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea class="form-control1" id="message" rows="4" placeholder="Enter your message"></textarea>
                        </div>
                        <br />
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </div>

                </form >
              
            </div >



        </>
    );
}