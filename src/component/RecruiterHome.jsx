import { Link } from 'react-router-dom';
import Style from './Style.css'
import logo from './image/logo.png'
import Cookies from 'js-cookie';
import { useState } from 'react';
import axios from 'axios';
import JobCard from './Job-Card';
export default function RecruiterHome() {
    const [jobs, setJobs] = useState(null)
    const [error, setError] = useState()
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
    

    

    const [formData, setFormData] = useState({
        employer_name: '',
        job_id: '',
        job_role: '',
        qualification: '',
        job_title: '',
        salary: '',
        description: '',
        requirements: '',
        location: '',
        posted_date: '',
        deadline: '',
        link: '',

    });

    const getJobs = async () => {
        console.log('getting jobs')
        await axios.get('https://skystarter.pythonanywhere.com/jobs/' + Cookies.get('Recruiterid') + '/').then(
            (response) => {
                console.log(response.data['data'])
                setJobs(response.data['data'])
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name == 'link') {
            const ragex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/g
            if (!ragex.test(e.target.value)) {
                // setError('Please enter valid web link')
                showMessage('Please enter valid web link','error')
            }
            else {
                setError('')
            }
        }
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    if (jobs == null) {
        getJobs()
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('employer_name', formData.employer_name)
        formdata.append('job_id', formData.job_id)
        formdata.append('job_role', formData.job_role)
        formdata.append('qualification', formData.qualification)
        formdata.append('job_title', formData.job_title)
        formdata.append('salary', formData.salary)
        formdata.append('description', formData.description)
        formdata.append('requirements', formData.requirements)
        formdata.append('location', formData.location)
        formdata.append('posted_date', formData.posted_date)
        formdata.append('deadline', formData.deadline)
        formdata.append('link', formData.link)
        formdata.append('employer_id', Cookies.get('Recruiterid'))
        await axios.post('https://skystarter.pythonanywhere.com/jobs/', formdata, {
            headers: {
                "Content-Type": 'multipart/form-data',
            }
        }).then(
            (response) => {
                if (response.data['message'].slice(1,5) == '1062') {
                   showMessage('Your job id should be unique','warning')
                }
                else if(response.data['message']=='update_success') {
                   
                    showMessage('Your job has been posted','success')
                    window.location.reload()
                }
                else{

                }
            }
        ).catch(
            (error) => {
                showMessage(error,'error')
            }
        )
    }

  
    return (
        <>
        <div className='float-error' id='messageContainer'>
          
        </div>
            <div className='jobs '>
                <div className='sidebar '>
                    <div className='align-center'>
                        <img className='user-dp' src={logo}></img>
                        <h5>Hi {Cookies.get('Recruitername')}</h5>
                    </div>
                    <div className='jobs pd10'>
                        <h6>{Cookies.get('Recruiteremail')}&nbsp; </h6>
                        <a href='/home'>verify</a>
                    </div>
                    <form onSubmit={handleSubmit} className='blur'>
                        <h4 className='logo-centered'>Post a new job</h4>
                        <label className='form-group'>
                            <label htmlFor='employer_name'>Company Name:</label>
                            <input type="text" name="employer_name" className='form-control' required value={formData.employer_name} onChange={handleChange} />
                        </label>

                        <label className='form-group'>
                            Job ID:
                            <input type="text" name="job_id" className='form-control' required value={formData.job_id} onChange={handleChange} />
                        </label>
                        <label className='form-group'>
                            Job Title:
                            <input type="text" name="job_title" className='form-control' value={formData.job_title} onChange={handleChange} />
                        </label>

                        <label className='form-group'>
                            Job Role:
                            <input type="text" name="job_role" className='form-control' required value={formData.job_role} onChange={handleChange} />
                        </label>

                        <label className='form-group'>
                            Qualification:
                            <textarea name="qualification" className='form-control' required value={formData.qualification} onChange={handleChange}></textarea>
                        </label>



                        <label className='form-group'>
                            Salary:
                            <input type="text" name="salary" className='form-control' required value={formData.salary} onChange={handleChange} />
                        </label>

                        <label className='form-group'>
                            Description:
                            <textarea name="description" className='form-control' required value={formData.description} onChange={handleChange}></textarea>
                        </label>

                        <label className='form-group'>
                            Requirements:
                            <textarea name="requirements" className='form-control' required value={formData.requirements} onChange={handleChange}></textarea>
                        </label>

                        <label className='form-group'>
                            Location:
                            <input type="text" name="location" className='form-control' required value={formData.location} onChange={handleChange} />
                        </label>

                        {/* <label className='form-group'>
                            Posted Date:
                            <input type="date" name="posted_date" className='form-control' value={formData.posted_date} onChange={handleChange} />
                        </label>
                        <br/> */}

                        <label className='form-group'>
                            Deadline:
                            <input type="date" name="deadline" className='form-control' value={formData.deadline} onChange={handleChange} />
                        </label>
                        <label className='form-group'>
                            Link:
                            <input type="text" name="link" className='form-control' required value={formData.link} onChange={handleChange} />
                            <p className='error'>{error}</p>
                        </label>


                        <br />
                        <br />


                        <button type="submit" className='btn btn-warning'>Post a job</button>

                    </form>
                    <br />
                    <br />
                </div>
                <div className='maincontent'>
                    {jobs != null && <JobCard jobData={jobs}></JobCard>}
                </div>
            </div>
        </>
    );

}