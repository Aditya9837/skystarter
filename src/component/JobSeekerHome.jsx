import { Link } from 'react-router-dom';
import Style from './Style.css'
import logo from './image/logo.png'
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
export default function JobSeekerHome() {
    // Assuming you have multiple instances of the education model
    const [educationArray, setEducationArray] = useState(null)
    const [skillArray, setSkillArray] = useState(null)
    const [experienceArray, setexperienceArray] = useState(null)
    const [jobs, setJobs] = useState(null)
    const [filterjobs, setfilterjob] = useState(null)
    const [current_job, setCurrentJob] = useState(null)
    const getEducations = async () => {
        await axios.get('https://skystarter.pythonanywhere.com/education/').then(function (response) {
            // Handle success, response.data contains the response data
            console.log('Response Data:', response.data);
            setEducationArray(() => {
                if (response.data['data'].length == 0) {
                    return null
                }
                else {
                    return response.data['data']
                }
            })
        }).catch(function (error) {
            // Handle error
            console.error('Error fetching data:', error);
        });
    }
    const getSkills = async () => {
        await axios.get('https://skystarter.pythonanywhere.com/skill/').then(function (response) {
            // Handle success, response.data contains the response data
            console.log('Response Data:', response.data);
            setSkillArray(() => {
                if (response.data['data'].length == 0) {
                    return null
                }
                else {
                    return response.data['data']
                }
            })
        }).catch(function (error) {
            // Handle error
            console.error('Error fetching data:', error);
        });
    }
    const getExperiences = async () => {
        await axios.get('https://skystarter.pythonanywhere.com/experience/').then(function (response) {
            // Handle success, response.data contains the response data
            console.log('Response Data:', response.data);
            setexperienceArray(() => {
                if (response.data['data'].length == 0) {
                    return null
                }
                else {
                    return response.data['data']
                }
            })
        }).catch(function (error) {
            // Handle error
            console.error('Error fetching data:', error);
        });
    }
    const getJobs = async () => {
        await axios.get('https://skystarter.pythonanywhere.com/jobs/').then(
            (response) => {
                setJobs(() => {
                    if (response.data['data'].length == 0) {
                        return null
                    }
                    else {
                        return response.data['data']
                    }
                }
                )
            }
        ).catch((error) => {
            console.log(error)
        })
    }

    if (educationArray == null) {
        getEducations()
    }
    if (experienceArray == null) {
        getExperiences()
    }
    if (skillArray == null) {
        getSkills()
    }
    if (jobs == null) {
        getJobs()
    }
    function getjobBymatch(skillArray, educationArray, jobs) {
        const skillmatch = jobs.filter((job) => {
            for (const skill of skillArray) {
                if (job.requirements.toLowerCase().includes(skill.skill_name.toLowerCase()) || job.description.toLowerCase().includes(skill.skill_name.toLowerCase())) {
                    return true
                }
            }

            return false
        })
        const educationmatch = jobs.filter((job) => {
            for (const education of educationArray) {
                if (job.requirements.toLowerCase().includes(education.degree.toLowerCase()) || job.description.toLowerCase().includes(education.degree.toLowerCase())) {
                    return true
                }
            }
            return false
        })
        return Array.from(new Set(skillmatch.concat(educationmatch)));
    }

    if (educationArray != null && skillArray != null && experienceArray != null && filterjobs == null && jobs != null) {
        setfilterjob(getjobBymatch(skillArray, educationArray, jobs))
    }

    return (
        <>
            <div className='jobs '>
                <div className='jobseeker-sidebar '>
                    <div className='align-center'>
                        <img className='user-dp' src={logo}></img>
                        <h5 className='center'>Hi {Cookies.get('username')}</h5>

                    </div>
                </div>
                <div className='maincontent'>
                    {
                        filterjobs != null &&
                        filterjobs.map((data)=>(
                            <div>
                            <div className="container ">
                                <div className="row justify-content-center">
                                    <div className="col-md-10"> {/* Use col-md-10 to make the card take full width on medium-sized screens and above */}
                                        <div className="card custom-card">
                                            <div className="card-header">

                                                <h3 className="card-title text-center">{data.job_title}</h3>
                                                <h4 className="card-title text-muted text-center">{data.employer_name}</h4>
                                                <p className="card-subtitle text-muted text-center">{data.location}</p>
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text">{data.description}</p>
                                                <hr />
                                                <p className="card-text">{data.requirements}</p>
                                                <hr />
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item custom-card">Job Role: {data.job_role}</li>
                                                    <li className="list-group-item custom-card">Qualification: {data.qualification}</li>
                                                    <li className="list-group-item custom-card">Salary: {data.salary}</li>
                                                    <li className="list-group-item custom-card">Posted Date: {data.posted_date}</li>
                                                    <li className="list-group-item custom-card">Deadline: {data.deadline}</li>
                                                    <li className="list-group-item custom-card">Salary: {data.salary}</li>

                                                </ul>
                                            </div>
                                            <div className="card-footer text-center">
                                                <a href={data.link} className="btn btn-primary">Apply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}