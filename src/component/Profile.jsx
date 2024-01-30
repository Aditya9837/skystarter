import React, { useState, useEffect } from 'react';
import Style from './Style.css' // Import CSS file
import logo from './image/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

function JobseekerProfile() {
    const [educationArray, setEducationArray] = useState([]);
    const [skillArray, setSkillArray] = useState([]);
    const [experienceArray, setExperienceArray] = useState([]);

    useEffect(() => {
        getEducations();
        getSkills();
        getExperiences();
    }, []);

    const getEducations = async () => {
        try {
            const response = await axios.get('https://skystarter.pythonanywhere.com/education/');
            setEducationArray(response.data.data || []);
        } catch (error) {
            console.error('Error fetching education data:', error);
        }
    };

    const getSkills = async () => {
        try {
            const response = await axios.get('https://skystarter.pythonanywhere.com/skill/');
            setSkillArray(response.data.data || []);
        } catch (error) {
            console.error('Error fetching skill data:', error);
        }
    };

    const getExperiences = async () => {
        try {
            const response = await axios.get('https://skystarter.pythonanywhere.com/experience/');
            setExperienceArray(response.data.data || []);
        } catch (error) {
            console.error('Error fetching experience data:', error);
        }
    };

    const handleDeleteEducation = async (educationId) => {
        try {
            await axios.delete(`https://skystarter.pythonanywhere.com/education/${educationId}/`);
            getEducations();
        } catch (error) {
            console.error('Error deleting education:', error);
        }
    };

    const handleDeleteExperience = async (experienceId) => {
        try {
            await axios.delete(`https://skystarter.pythonanywhere.com/experience/${experienceId}/`);
            getExperiences();
        } catch (error) {
            console.error('Error deleting experience:', error);
        }
    };

    const handleDeleteSkill = async (skillId) => {
        try {
            await axios.delete(`https://skystarter.pythonanywhere.com/skill/${skillId}/`);
            getSkills();
        } catch (error) {
            console.error('Error deleting skill:', error);
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img className="profile-avatar" src={logo} alt="User Avatar" />
                <div className="profile-user-info">
                    <h2 className="profile-username">Hi, John Doe</h2>
                    <p className="profile-email">john.doe@example.com</p>
                    <Link to="/home" className="profile-verify-link">Verify Email</Link>
                </div>
            </div>
            <div className="profile-content">
                <section className="profile-section">
                    <h3>Education</h3>
                    <Link to="/addEducation" className="add-button">Add Education</Link>
                    {educationArray.map((education) => (
                        <div key={education.id} className="profile-item">
                            <p>{education.degree} - {education.institution_name}</p>
                            <p>{education.field_of_study}, {education.graduation_date}</p>
                            <p>GPA: {education.gpa}</p>
                            <div className="action-buttons">
                                <Link to={`/updateEducation/${education.id}`} className="edit-button">Edit</Link>
                                <button onClick={() => handleDeleteEducation(education.id)} className="delete-button">Delete</button>
                            </div>
                        </div>
                    ))}
                </section>
                <section className="profile-section">
                    <h3>Experience</h3>
                    <Link to="/addExperience" className="add-button">Add Experience</Link>
                    {experienceArray.map((experience) => (
                        <div key={experience.id} className="profile-item">
                            <p>{experience.job_title} - {experience.company_name}</p>
                            <p>{experience.location}</p>
                            <p>{experience.start_date} - {experience.end_date}</p>
                            <div className="action-buttons">
                                <Link to={`/updateExperience/${experience.id}`} className="edit-button">Edit</Link>
                                <button onClick={() => handleDeleteExperience(experience.id)} className="delete-button">Delete</button>
                            </div>
                        </div>
                    ))}
                </section>
                <section className="profile-section">
                    <h3>Skills</h3>
                    <Link to="/addSkill" className="add-button">Add Skill</Link>
                    {skillArray.map((skill) => (
                        <div key={skill.id} className="profile-item">
                            <p>{skill.skill_name}</p>
                            <p>Proficiency Level: {skill.proficiency_level}</p>
                            <p>Years of Experience: {skill.years_of_experience}</p>
                            <div className="action-buttons">
                                <Link to={`/updateSkill/${skill.id}`} className="edit-button">Edit</Link>
                                <button onClick={() => handleDeleteSkill(skill.id)} className="delete-button">Delete</button>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default JobseekerProfile;
