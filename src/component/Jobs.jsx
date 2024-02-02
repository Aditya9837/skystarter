
import { useState } from 'react';
import JobCard from './Job-Card';
import Style from './Style.css'
import axios from 'axios';
import Cookies from 'js-cookie';
export default function Jobs() {
    const [jobData, setJobdata] = useState(null)
    const [allJobData,setAllJobData] = useState()
    const [current_job, setCurrentJob] = useState(null)
    const getJobs = async () => {
        await axios.get('https://skystarter.pythonanywhere.com/jobs/').then((response) => {
            console.log(response.data['data'])
            setJobdata(response.data['data'])
            setAllJobData(response.data['data'])
        }).catch((error) => {
            console.log(error)
        })
    }
    if (jobData == null) {
        getJobs()
    }
    const filterjobs = (e) =>{
          
          setJobdata(allJobData.filter((data)=>{
            return (data.job_role.toLowerCase().includes(e.target.value.toLowerCase())||data.job_title.toLowerCase().includes(e.target.value.toLowerCase()) || data.location.toLowerCase().includes(e.target.value.toLowerCase()))
          }))
    }


    return (
        <>

            <div className='jobs'>

                <div className='sidebar-job'>

                    <div className='search-div '>
                        <i class="fa fa-search" ></i>
                        <input className='search-bar' placeholder='search jobs' onChange={filterjobs} ></input>
                    </div>

                    {jobData != null &&
                        jobData.map(
                            (data, index) => (
                                <div className="container mt-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-12">
                                            <div className="card custom-card">
                                                <div className="card-body" onClick={() => setCurrentJob(jobData[index])}>
                                                    <h5 className="card-title">Job ID: {data.job_id}</h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">Company Name: {data.employer_name}</h6>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item custom-card"><strong>Job Role:</strong> {data.job_role}</li>
                                                        {/* <li className="list-group-item custom-card"><strong>Qualification:</strong> {jobData[0].qualification}</li> */}
                                                        <li className="list-group-item custom-card"><strong>Experience:</strong> 0-1 Year</li>
                                                        <li className="list-group-item custom-card"><strong>Job Title:</strong> {data.job_title}</li>
                                                        <li className="list-group-item custom-card"><strong>Salary:</strong> {data.salary}</li>
                                                        <li className="list-group-item custom-card"><strong>Deadline:</strong> {data.deadline}</li>
                                                        <li className="list-group-item custom-card"><strong>Location:</strong> {data.location}</li>
                                                        <li className="list-group-item custom-card">
                                                            <a href={data.link} className="btn btn-primary btn-sm">Apply Now</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            )
                        )
                    }
                </div>
                <div className='maincontent'>
                    {
                        current_job != null && <div>
                            <div className="container ">
                                <div className="row justify-content-center">
                                    <div className="col-md-10"> {/* Use col-md-10 to make the card take full width on medium-sized screens and above */}
                                        <div className="card custom-card">
                                            <div className="card-header">

                                                <h3 className="card-title text-center">{current_job.job_title}</h3>
                                                <h4 className="card-title text-muted text-center">{current_job.employer_name}</h4>
                                                <p className="card-subtitle text-muted text-center">{current_job.location}</p>
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text">{current_job.description}</p>
                                                <hr />
                                                <p className="card-text">{current_job.requirements}</p>
                                                <hr />
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item custom-card">Job Role: {current_job.job_role}</li>
                                                    <li className="list-group-item custom-card">Qualification: {current_job.qualification}</li>
                                                    <li className="list-group-item custom-card">Salary: {current_job.salary}</li>
                                                    <li className="list-group-item custom-card">Posted Date: {current_job.posted_date}</li>
                                                    <li className="list-group-item custom-card">Deadline: {current_job.deadline}</li>
                                                    <li className="list-group-item custom-card">Salary: {current_job.salary}</li>

                                                </ul>
                                            </div>
                                            <div className="card-footer text-center">
                                                <a href={current_job.link} className="btn btn-primary">Apply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    }
                </div>
            </div>
        </>
    );
}