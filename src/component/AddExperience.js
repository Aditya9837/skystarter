import { useState } from 'react';
import Style from './Style.css'

export default function AddExperience() {
    const [job_title,setJob_title]=useState()
    const [company_name,setCompany_name]=useState()
    const [location,setLocation]=useState()
    const [employment_type,setEmployment_type]=useState()
    const [start_date,setStart_date]=useState()
    const [end_date,setEnd_date]=useState()
    const [responsibilities,setResponsibilities]=useState()
    const [achievements,setAchievements]=useState()

    const UpdateJob_title=(e)=>{
        setJob_title(e.target.value)
    }
    const UpdateCompany_name=(e)=>{
        setCompany_name(e.target.value)
    }
    const UpdateLocation=(e)=>{
        setLocation(e.target.value)
    }
    const UpdateEmployment_type=(e)=>{
        setEmployment_type(e.target.value)
    }
    const UpdateStart_date=(e)=>{
        setStart_date(e.target.value)
    }
    const UpdateEnd_date=(e)=>{
        setEnd_date(e.target.value)
    }
    const UpdateResponsibilities=(e)=>{
        setResponsibilities(e.target.value)
    }
    const UpdateAchievements=(e)=>{
        setAchievements(e.target.value)
    }
    

    return (
        <>
            <div className='container mt-5 pad10'>
                <form className="form">
                    <div className='blur'>
                        <div className='form-group'>
                            <label htmlFor="jobtitle">Job Title</label>
                            <input type="text" name="job-title" onChange={UpdateJob_title} placeholder=" Enter Your Job Title" className="form-control1 "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="companyname">Company Name</label>
                            <input type="text" id="company-name" onChange={UpdateCompany_name} placeholder=" Enter Your Company Name" className="form-control1 "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="location">Location</label>
                            <input type="text" id="location" onChange={UpdateLocation} placeholder="enter location" className="form-control1 "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="employmenttype">Employment Type</label>
                            <input type="text" id="employment-type" onChange={UpdateEmployment_type} placeholder="Employment Type" className="form-control1 "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="startdate">Start Date</label>
                            <input type="date" id="start-date" onChange={UpdateStart_date} placeholder="Start Date" className="form-control1 "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="enddate">End Date</label>
                            <input type="date" id="end-date" onChange={UpdateEnd_date} placeholder="End Date" className="form-control1 "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="responsibilities">Resposibilities</label>
                            <input type="text" id="responsibilities" onChange={UpdateResponsibilities} placeholder="Responsibilities" className="form-control1 "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="achievements">achievements</label>
                            <input type="text" id="achievements" onChange={UpdateAchievements} placeholder="Achievements" className="form-control1 "></input>

                        </div>
                        <br/>
                        <div>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}