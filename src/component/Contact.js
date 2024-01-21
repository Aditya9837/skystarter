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
                <div  className="logo-centered">
                    <h2>Contact Us</h2>
                </div>
                <form className="form">
                    <div class="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" class="form-control" onChange={UpdateEmail} id="email" placeholder="Enter your email" />
                        {
                            !isvalidEmail && <label className="error" >Enter Valid Email</label>
                        }
                    </div>
                    <div class="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="phone" class="form-control" id="phone" placeholder="Enter your mobile number" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" class="form-control" id="subject" placeholder="Enter the subject" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea class="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                    </div>
                    <br />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>



        </>
    );
}