import { Link } from 'react-router-dom';
import Style from './Style.css'
import logo from './image/logo.png'
export default function JobSeekerHome() {
    // Assuming you have multiple instances of the education model
    var educationArray = [
        {
            institution_name: "University A",
            degree: "Bachelor's",
            field_of_study: "Computer Science",
            graduation_date: "2022-05-15", // Use the actual graduation date in the format YYYY-MM-DD
            gpa: 3.5
        },
        {
            institution_name: "College B",
            degree: "Master's",
            field_of_study: "Data Science",
            graduation_date: "2024-01-30", // Use the actual graduation date in the format YYYY-MM-DD
            gpa: 3.8
        },
        {
            institution_name: "University A",
            degree: "Bachelor's",
            field_of_study: "Computer Science",
            graduation_date: "2022-05-15", // Use the actual graduation date in the format YYYY-MM-DD
            gpa: 3.5
        },
        {
            institution_name: "College B",
            degree: "Master's",
            field_of_study: "Data Science",
            graduation_date: "2024-01-30", // Use the actual graduation date in the format YYYY-MM-DD
            gpa: 3.8
        },
        {
            institution_name: "University A",
            degree: "Bachelor's",
            field_of_study: "Computer Science",
            graduation_date: "2022-05-15", // Use the actual graduation date in the format YYYY-MM-DD
            gpa: 3.5
        },
        {
            institution_name: "College B",
            degree: "Master's",
            field_of_study: "Data Science",
            graduation_date: "2024-01-30", // Use the actual graduation date in the format YYYY-MM-DD
            gpa: 3.8
        },
        // Add more entries as needed
    ];

    // Assuming you have multiple instances of the Experience model
    var experienceArray = [
        {
            user: "UserA", // Replace with the actual user ID or username
            job_title: "Software Developer",
            company_name: "TechCo",
            location: "City A",
            employment_type: "Full-time",
            start_date: "2022-01-01", // Use the actual start date in the format YYYY-MM-DD
            end_date: "2023-12-31", // Use the actual end date in the format YYYY-MM-DD or null if still ongoing
            responsibilities: "Developed and maintained web applications.",
            achievements: "Implemented feature X, resulting in a 20% improvement in performance."
        },
        {
            user: "UserB", // Replace with the actual user ID or username
            job_title: "Data Analyst",
            company_name: "DataTech",
            location: "City B",
            employment_type: "Contract",
            start_date: "2024-02-15", // Use the actual start date in the format YYYY-MM-DD
            end_date: null, // If the job is ongoing, set end_date to null
            responsibilities: "Analyzed and visualized data to support business decisions.",
            achievements: "Generated insights that contributed to a 15% increase in revenue."
        },
        // Add more entries as needed
    ];
    // Assuming you have multiple instances of the Skill model
    var skillArray = [
        {
            user: "UserA", // Replace with the actual user ID or username
            skill_name: "Programming Language",
            proficiency_level: "Advanced",
            years_of_experience: 5,
            certifications: "Certification A, Certification B"
        },
        {
            user: "UserB", // Replace with the actual user ID or username
            skill_name: "Data Analysis",
            proficiency_level: "Intermediate",
            years_of_experience: 3,
            certifications: "Certification C"
        },
        // Add more entries as needed
    ];




    return (
        <>
            <div className='jobs '>
                <div className='sidebar '>
                    <div className='align-center'>
                    <img className='user-dp'  src={logo}></img>
                    <h5 className='center'>Hi User</h5>
                    </div>
                    
                    <div className='jobs'>
                        <h6>E-mail&nbsp; </h6>
                        <a href='/home'>verify</a>
                    </div>
                    <div className='jobs'>
                        <h6>Education&nbsp;</h6>
                        <a href='/home'> Update</a>
                    </div>
                    {educationArray.map(
                        (education, index) => (
                            <>
                                <table className='table table-bordered data-card'>
                                    <thead className='thead-light'>
                                        <th>Degree</th>
                                        <th>{education.degree}</th>

                                    </thead>
                                    <tr>
                                        <td>Institution Name</td>
                                        <td>{education.institution_name}</td>
                                    </tr>
                                    <tr>
                                        <td>Field of study</td>
                                        <td>{education.field_of_study}</td>
                                    </tr>
                                    <tr>
                                        <td>Graduation Date</td>
                                        <td>{education.graduation_date}</td>
                                    </tr>
                                    <tr>
                                        <td>CGPA</td>
                                        <td>{education.gpa}</td>
                                    </tr>
                                </table>
                            </>
                        )
                    )}
                    <div className='jobs'>
                        <h6>Experience&nbsp;</h6>
                        <a href='/home'> Update</a>
                    </div>
                    {experienceArray.map(
                        (experience, index) => (
                            <>
                                <table className='table table-bordered data-card'>
                                    <thead className='thead-light'>
                                        <th>Job Title</th>
                                        <th>{experience.job_title}</th>

                                    </thead>
                                    <tr>
                                        <td>Company Name</td>
                                        <td>{experience.company_name}</td>
                                    </tr>
                                    <tr>
                                        <td>Location</td>
                                        <td>{experience.location}</td>
                                    </tr>
                                    <tr>
                                        <td>Employment Type</td>
                                        <td>{experience.employment_type}</td>
                                    </tr>
                                    <tr>
                                        <td>Start Date</td>
                                        <td>{experience.start_date}</td>
                                    </tr>
                                    <tr>
                                        <td>End Date</td>
                                        <td>{experience.end_date}</td>
                                    </tr>
                                    <tr>
                                        <td>Responsibilities</td>
                                        <td>{experience.responsibilities}</td>
                                    </tr>
                                    <tr>
                                        <td>Achievements</td>
                                        <td>{experience.achievements}</td>
                                    </tr>
                                </table>
                            </>
                        )
                    )}
                    <div className='jobs'>
                        <h6>Skill&nbsp;</h6>
                        <a href='/home'>Update</a>
                    </div>
                    {skillArray.map(
                        (skill, index) => (
                            <>
                                <table  className=' table table-bordered data-card'>
                                    <thead className='thead-light'>
                                        <th>Skill Name</th>
                                        <th>{skill.skill_name}</th>

                                    </thead>
                                    <tr>
                                        <td>proficiency Level</td>
                                        <td>{skill.proficiency_level}</td>
                                    </tr>
                                    <tr>
                                        <td>years Of Experience</td>
                                        <td>{skill.years_of_experience}</td>
                                    </tr>
                                    <tr>
                                        <td>Certification</td>
                                        <td>{skill.certifications}</td>
                                    </tr>
                                </table>
                                <br/>
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