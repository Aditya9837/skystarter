import { Link } from 'react-router-dom';
import Style from './Style.css'
import logo from './image/logo.png'
import { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
export default function JobSeekerHome() {
    // Assuming you have multiple instances of the education model
    const [educationArray, setEducationArray] = useState(null)
    const [skillArray, setSkillArray] = useState(null)
    const [experienceArray, setexperienceArray] = useState(null)

    const getEducations = async () => {
        await axios.get('https://skystarter.pythonanywhere.com/education/').then(function (response) {
            // Handle success, response.data contains the response data
            console.log('Response Data:', response.data);
            setEducationArray(()=>{
                if(response.data['data'].length==0)
                {
                    return null
                }
                else{
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
            setSkillArray(()=>{
                if(response.data['data'].length==0)
                {
                    return null
                }
                else{
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
            setexperienceArray(()=>{
                if(response.data['data'].length==0)
                {
                    return null
                }
                else{
                    return response.data['data']
                }
            })
        }).catch(function (error) {
            // Handle error
            console.error('Error fetching data:', error);
        });
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




    return (
        <>
            <div className='jobs '>
                <div className='jobseeker-sidebar '>
                    <div className='align-center'>
                        <img className='user-dp' src={logo}></img>
                        <h5 className='center'>Hi {Cookies.get('username')}</h5>
                    </div>

                    <div className='jobs logo-centered'>
                        <h6>{Cookies.get('useremail')}&nbsp;<a href='/home'>verify</a> </h6>
                        
                    </div>
                    <hr />
                    <div className='jobs logo-centered'>
                        <h5>Education&nbsp;</h5>
                        {(educationArray==null) && <Link to='/addEducation' className='btn btn-success logo-centered'>Add Education</Link>}
                    </div>
                   
                      <hr />
                   
                    {(educationArray != null) &&
                        educationArray.map(
                            (education, index) => (
                                <>

                                    <div className="skill-card">
                                        <div className="skill-header">
                                            <h5 className="skill-name">{education.degree}</h5>

                                        </div>
                                        <div className="skill-body">
                                            <ul className="skill-details">

                                                <li>

                                                    <span className="detail-value">{education.institution_name.toUpperCase()}</span>
                                                </li>
                                                <li>

                                                    <span className="detail-value">{education.field_of_study.toUpperCase()}</span>
                                                </li>
                                                <li>

                                                    <span className="detail-value">{education.graduation_date.toUpperCase()}</span>
                                                </li>
                                                <li>

                                                    <span className="detail-value">{education.gpa}</span>
                                                </li>
                                      
                                            </ul>

                                            <div className="delete-container">
                                                <a href='/Updateeducation'>Update</a>
                                                <button onClick={async ()=>{
                                                  await axios.delete('https://skystarter.pythonanywhere.com/education/'+education.id+'/').then((response)=>{
                                                    window.location.reload()
                                                  })
                                                }} className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        )}

                    <div className='jobs logo-centered'>
                        <h5>Experience&nbsp;</h5>
                        {(experienceArray==null) && <Link to='/addExperience' className='btn btn-success logo-centered'>Add Experience</Link>}
                    </div>
                    <hr />
                    {(experienceArray != null) && experienceArray.map(
                        (experience, index) => (
                            <>

                                <div className="skill-card">
                                    <div className="skill-header">
                                        <h5 className="skill-name">{experience.job_title.toUpperCase()}</h5>

                                    </div>
                                    <div className="skill-body">
                                        <ul className="skill-details">
                                            <li>
                                                <span className="detail-label">Company Name:</span>
                                                <span className="detail-value">{experience.company_name}</span>
                                            </li>
                                            <li>
                                                <span className="detail-label">Job Location:</span>
                                                <span className="detail-value">{experience.location}</span>
                                            </li>
                                            <li>
                                                <span className="detail-label">Employement Type:</span>
                                                <span className="detail-value">{experience.employment_type}</span>
                                            </li>
                                            <li>
                                                <span className="detail-label">Start Date:</span>
                                                <span className="detail-value">{experience.start_date}</span>
                                            </li>
                                            <li>
                                                <span className="detail-label">End Date:</span>
                                                <span className="detail-value">{experience.end_date}</span>
                                            </li>
                                            <li>
                                                <span className="detail-label">Responsibilities:</span>
                                                <span className="detail-value">{experience.responsibilities}</span>
                                            </li>
                                            <li>
                                                <span className="detail-label">Achievements:</span>
                                                <span className="detail-value">{experience.achievements}</span>
                                            </li>
                                        </ul>

                                        <div className="delete-container">
                                            <a href='/Addexperience'> Update</a>
                                            <button onClick={async ()=>{
                                                  await axios.delete('https://skystarter.pythonanywhere.com/experience/'+experience.id+'/').then((response)=>{
                                                    window.location.reload()
                                                  })
                                                }} className="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    )}
                    <div className='jobs logo-centered'>
                        <h5>Skill&nbsp;</h5>
                        {(skillArray==null) && <Link to='/addSkill' className='btn btn-success logo-centered'>Add Skill</Link>}
                    </div>
                    <hr />
                    {(skillArray != null) && skillArray.map(
                        (skill, index) => (
                            <>
                                <div className="skill-card">
                                    <div className="skill-header">

                                        <h5 className="skill-name">{skill.skill_name}</h5>

                                    </div>
                                    <div className="skill-body">
                                        <ul className="skill-details">
                                            <li>
                                                <span className="detail-label">Proficiency Level:</span>
                                                <span className="detail-value">{skill.proficiency_level}</span>
                                            </li>
                                            <li>
                                                <span className="detail-label">Years of Experience:</span>
                                                <span className="detail-value">{skill.years_of_experience}</span>
                                            </li>
                                            <li>
                                                <a href={skill.certifications} ><span className="detail-label">Certificate</span></a>

                                            </li>
                                        </ul>

                                        <div className="delete-container">
                                            <a href='/Addskill'>Update</a>
                                            <button onClick={async ()=>{
                                                  await axios.delete('https://skystarter.pythonanywhere.com/skill/'+skill.id+'/').then((response)=>{
                                                    window.location.reload()
                                                  })
                                                }} className="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </>
                        )
                    )}
                </div>
                <div className='maincontent'>

                </div>
            </div>
        </>
    );
}