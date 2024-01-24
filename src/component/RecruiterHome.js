import { Link } from 'react-router-dom';
import Style from './Style.css'
import logo from './image/logo.png'
export default function RecruiterHome() {
    // Assuming you have multiple instances of the Job model
    var jobArray = [
        {
            employer: "EmployerA", // Replace with the actual employer ID or name
            job_id: "job1",
            job_role: "Software Developer",
            qualification: "Bachelor's degree in Computer Science",
            job_title: "Full Stack Developer",
            salary: "$80,000",
            description: "Exciting opportunity for a skilled Full Stack Developer...",
            requirements: "Experience with JavaScript, React, Node.js...",
            location: "City A",
            posted_date: "2022-01-01", // Use the actual posted date in the format YYYY-MM-DD
            deadline: "2022-02-01" // Use the actual deadline in the format YYYY-MM-DD
        },
        {
            employer: "EmployerB", // Replace with the actual employer ID or name
            job_id: "job2",
            job_role: "Data Analyst",
            qualification: "Master's degree in Statistics or related field",
            job_title: "Data Analyst",
            salary: "$70,000",
            description: "Join our dynamic team as a Data Analyst and contribute to data-driven decision-making...",
            requirements: "Strong analytical skills, proficiency in SQL...",
            location: "City B",
            posted_date: "2022-02-15", // Use the actual posted date in the format YYYY-MM-DD
            deadline: "2022-03-15" // Use the actual deadline in the format YYYY-MM-DD
        },
        // Add more entries as needed
    ];





    return (
        <>
            <div className='jobs '>
                <div className='sidebar '>
                    <div className='align-center'>
                        <img className='user-dp' src={logo}></img>
                        <h5>Hi Recruiter</h5>
                    </div>

                    <div className='jobs'>
                        <h6>E-mail&nbsp; </h6>
                        <a href='/home'>verify</a>
                    </div>
                    <div className='jobs'>
                        <h6>Post a job&nbsp;</h6>
                        <a href='/home'> Update</a>
                    </div>
                    {jobArray.map(
                        (job, index) => (
                            <>
                                <table className='table table-bordered data-card'>
                                    <thead className='thead-light'>
                                        <th>Employer</th>
                                        <th>{job.employer}</th>

                                    </thead>
                                    <tr>
                                        <td>Job Id</td>
                                        <td>{job.job_id}</td>
                                    </tr>
                                    <tr>
                                        <td>Job Role</td>
                                        <td>{job.job_role}</td>
                                    </tr>
                                    <tr>
                                        <td>Qualification</td>
                                        <td>{job.qualification}</td>
                                    </tr>
                                    <tr>
                                        <td>Job Title</td>
                                        <td>{job.job_title}</td>
                                    </tr>
                                    <tr>
                                        <td>Salary</td>
                                        <td>{job.salary}</td>
                                    </tr>
                                    <tr>
                                        <td>Description</td>
                                        <td>{job.description}</td>
                                    </tr>
                                    <tr>
                                        <td>Requirements</td>
                                        <td>{job.requirements}</td>
                                    </tr>
                                    <tr>
                                        <td>Location</td>
                                        <td>{job.location}</td>
                                    </tr>
                                    <tr>
                                        <td>Posted Date</td>
                                        <td>{job.posted_date}</td>
                                    </tr>
                                    <tr>
                                        <td>Deadline</td>
                                        <td>{job.deadline}</td>
                                    </tr>
                                </table>
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