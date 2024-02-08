import { useEffect, useState } from 'react';
import Style from './Style.css'
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddExperience() {
    const nevigate = useNavigate()
    const [skill_name, setSkill_name] = useState()
    const [proficiency_level, setProficiency_level] = useState()
    const [years_of_experience, setYears_of_experience] = useState()
    const [certifications, setCertifications] = useState()

    function showMessage(message, type) {
        var messageContainer = document.getElementById("messageContainer");

        // Set background color based on the message type
        var backgroundColor;
        switch (type) {
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
        setTimeout(function () {
            messageContainer.style.display = "none";
        }, 5000);
    }

    const UpdateSkill_name = (e) => {
        setSkill_name(e.target.value)
    }
    const UpdateProficiency_level = (e) => {
        setProficiency_level(e.target.value)
    }
    const UpdateYears_of_experience = (e) => {
        setYears_of_experience(e.target.value)
    }
    const UpdateCertificaions = (e) => {
        setCertifications(e.target.value)
    }
    useEffect(() => {
        const isJobSeekerLoggedIn = Cookies.get('isJobSeekerLoggedIn');
        if (isJobSeekerLoggedIn !== 'true') {
            nevigate('/jobSeekerLogin'); // Use your custom nevigate function
        }
    }, [nevigate]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('skill_name', skill_name)
        formdata.append('proficiency_level', proficiency_level)
        formdata.append('years_of_experience', years_of_experience)
        formdata.append('certifications', certifications)
        formdata.append('user_id', Cookies.get('user_id'))
        try {
            const response = await axios.post('https://skystarter.pythonanywhere.com/skill/', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response.data['message'])
            if (response.data['message'] == 'Success') {
                showMessage('Your skills has been added successfully', 'success')
                setCertifications('')
                setProficiency_level('')
                setSkill_name('')
                setYears_of_experience('')
                nevigate('/jobSeekerHome')
            }


            if (response.data['message'].slice(1, 5) == '1062') {
                showMessage('Skill name should be unique', 'warning')
            }


        } catch (error) {
            showMessage(error, 'error');
            // Handle error or display an error message
        }

    }
    return (
        <>
            <div className='float-error' id='messageContainer'>

            </div>
            <div className='container mt-5 pad10'>

                <form className="form" onSubmit={handleSubmit}>
                    <div className='blur'>
                        <div className='form-group'>
                            <label htmlFor="skill_name">Skill Name</label>
                            <input type="text" id="skill_name" value={skill_name} required onChange={UpdateSkill_name} placeholder=" Enter Your Skill" className="form-control "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="proficiency_level">Proficiency Level</label>
                            <select type="Choice" id="proficiency_level" required onChange={UpdateProficiency_level} className="form-control ">
                                <option>Select an option</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Expert</option>
                            </select>

                        </div>
                        <div className='form-group'>
                            <label htmlFor=" years_of_experiencen">Years Of Experience</label>
                            <input type="number" id="years_of_experience" value={years_of_experience} required onChange={UpdateYears_of_experience} placeholder="Enter Year of Experience" className="form-control "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="certifications">Certificate Link (If availaible)</label>
                            <input type="text" id="certifications" value={certifications} onChange={UpdateCertificaions} placeholder="" className="form-control "></input>

                        </div>

                        <br />
                        <div className='button-container'>
                            <input type='submit' value='Add' className='button' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}